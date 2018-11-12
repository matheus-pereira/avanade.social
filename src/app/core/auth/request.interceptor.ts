import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError, interval, observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { retryWhen, flatMap, delay, take, finalize, concat, catchError, scan, map, retry, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(
        private tokenService: TokenService,
        private userService: UserService,
        private router: Router
    ) { }

    addAuthReader(req: HttpRequest<any>): HttpRequest<any> {
        if (this.tokenService.hasToken()) {
            const token = this.tokenService.getToken();
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            });
        }
        return req;
    }

    http_retry(maxRetry: number = 1000, delayMs: number = 3000) {
        return (src: Observable<any>) => src.pipe(
          retryWhen((error) => {
            return error.pipe(flatMap((error => {
              console.log("status", error.status);
              //408 Request Timeout # 500 Internal Server Error
              if (error.status === 408 || error.status === 500) {
                return of(error.status).pipe(delay(delayMs));
              }

              this.userService.logout();
              this.router.navigate(['']);
              return throwError(error);
            }))).pipe(take(maxRetry))
          })
        )
      }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        return next.handle(this.addAuthReader(req)).pipe(this.http_retry());
    }
}