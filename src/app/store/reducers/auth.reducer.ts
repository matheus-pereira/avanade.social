import { AuthActionTypes } from "../actions/auth.actions";

export interface AuthState {
    user: {
        id: string,
        name: string,
        email: string
    };
    token: string;
    expiration: number;
    errorMessage: string;
}

const initialState: AuthState = {
    user: null,
    token: null,
    expiration: null,
    errorMessage: null
};

export default function AuthReducer(state: AuthState = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case 'LOGIN':
            state = {
                ...state,
                ...action.payload
            };
            break;
        case 'SET_USER':
            state = {
                ...state
            };
            break;
        case 'LOGIN_ERROR':
            state = {
                ...state,
                errorMessage: 'Usuário ou senha incorretos.'
            };
            break;
    }

    return state;
}