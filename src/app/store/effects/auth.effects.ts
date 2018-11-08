import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { LoginAction, LoginErrorAction, LoginSuccessAction } from '../actions/auth.actions';
import { AuthState } from '../reducers/auth.reducer';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }

  @Effect() login(): Observable<any> {
    return this.actions$
      .ofType('LOGIN')
      .pipe(
        switchMap((action: LoginAction) => {
          return this.authService.login(action.payload.email, action.payload.email)
            .pipe(
              map((user: AuthState) => new LoginSuccessAction(user)),
              catchError(error => of(new LoginErrorAction(error)))
            )
        })
      );
  }

  // @Effect() loginSuccess(): Observable<any> {
  //   return this.actions$
  //     .ofType('LOGIN_SUCCESS')
  //     .pipe(
  //       tap((user) => {
  //         localStorage.setItem('token', user.payload.token),
  //           this.router.navigateByUrl('/')
  //       })
  //     );
  // }
  @Effect() loginError(): Observable<any> {
    return this.actions$
      .ofType('LOGIN_ERROR')
  }
}