import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(email: string, password: string) {
    return this.http
      .post(
        `${API_URL}/users/login`,
        { email, password },
        { observe: 'response' }
      )
      .pipe(tap(res => {
        const authToken = res.body['token'];
        this.userService.setToken(authToken);
      }));
  }

  signUp(newUser: NewUser) {
    return this.http
      .post(
        `${API_URL}/users/register`,
        newUser,
        { observe: 'response' }
      )
      .pipe(tap(res => {
        const authToken = res.body['token'];
        this.userService.setToken(authToken);
      }));
  }
}
