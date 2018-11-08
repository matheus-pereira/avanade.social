import { AuthActionTypes } from "../actions/auth.actions";

export interface AuthState {
    token: string;
    expires_in: number;
    error: string;
}

const initialState: AuthState = {
    token: null,
    expires_in: null,
    error: null
};

export default function AuthReducer(state: AuthState = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case 'LOGIN':
            state = {
                ...state,
                ...action.payload
            };
            break;
        case 'LOGIN_SUCCESS':
            state = {
                ...state,
                ...action.payload
            };
            break;
        case 'LOGIN_ERROR':
            state = {
                ...state,
                error: 'Usuáio ou senha incorretos. Por favor tente novamente.'
            };
            break;
    }

    return state;
}