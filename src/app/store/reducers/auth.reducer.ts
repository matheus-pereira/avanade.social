import { AuthActionTypes } from "../actions/auth.actions";

export interface AuthState {
    user: {
        id: string,
        name: string,
        email: string
    };
    token: string;
    expiration: number;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    token: null,
    expiration: null,
    loading: false
};

export default function AuthReducer(state: AuthState = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case 'LOGIN':
            state = {
                ...state,
                loading: true
            };
            break;
        case 'SET_USER':
            state = {
                ...state,
                ...action.payload,
                loading: false
            };
            break;
    }

    return state;
}