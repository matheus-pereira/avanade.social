import { UserActionTypes } from "../actions/user.actions";

export interface UserState {
    user: User
}

const initialState: UserState = {
    user: null
};

export default function AuthReducer(state: UserState = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case 'SET_USER':
            state = {
                ...state,
                ...action.payload
            };
            break;
    }

    return state;
}