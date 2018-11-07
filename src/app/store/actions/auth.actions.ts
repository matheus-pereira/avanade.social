import { Action } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export class LoginAction implements Action {
    readonly type = 'LOGIN';
    constructor(
        public payload: {
            email: string,
            password: string
        }
    ) { }
}

export class SetUserAction implements Action {
    readonly type = 'SET_USER';
    constructor(
        public payload: AuthState
    ) { }
}

export type AuthActionTypes = LoginAction | SetUserAction;
