import { PostActionTypes } from "../actions/post.actions";

export interface PostState {
    posts: Post[];
    loading: boolean;
}

const initialState: PostState = {
    posts: [],
    loading: false
};

export default function PostReducer(state: PostState = initialState, action: PostActionTypes): PostState {
    switch (action.type) {
        case 'LOAD_POSTS':
            state = {
                ...state,
                loading: true
            };
            break;
        case 'SET_POSTS':
            state = {
                ...state,
                posts: [ ...state.posts, ...action.payload ],
                loading: false,
            };
            break;
    }

    return state;
}