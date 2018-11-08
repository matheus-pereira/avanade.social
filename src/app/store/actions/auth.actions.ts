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
export class LoginSuccessAction implements Action {
    readonly type = 'LOGIN_SUCCESS';
    constructor(
        public payload: AuthState
    ) { }
}
export class LoginErrorAction implements Action {
    readonly type = 'LOGIN_ERROR';
    constructor(
        public payload: any
    ) { }

}
export class LogoutAction implements Action {
    readonly type = 'LOGOUT';
    constructor(
        public payload: any
    ) { }
}
export type AuthActionTypes = LoginAction | LoginSuccessAction | LoginErrorAction;
