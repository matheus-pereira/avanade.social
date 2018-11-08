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

export class LoginErrorAction implements Action {
    readonly type = 'LOGIN_ERROR';
    constructor(
        public payload: any
    ) { }

    //Inserir switch case
}
export type AuthActionTypes = LoginAction | SetUserAction | LoginErrorAction;
