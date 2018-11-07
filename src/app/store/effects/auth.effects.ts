import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { SetUserAction, LoginAction } from '../actions/auth.actions';
import { AuthState } from '../reducers/auth.reducer';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

  @Effect() login(): Observable<SetUserAction> {
    return this.actions$
      .ofType('LOGIN')
      .pipe(
        switchMap((action: LoginAction) => {
            return this.authService.login(action.payload.email, action.payload.email)
                .pipe(map((user: AuthState) => new SetUserAction(user)))
        })
      );
  }

}