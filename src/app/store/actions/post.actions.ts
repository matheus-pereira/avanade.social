import { Action } from '@ngrx/store';

export class LoadPostsAction implements Action {
  readonly type = 'LOAD_POSTS';
  constructor(public payload: Date = null) { }
}

export class SetPostsAction implements Action {
  readonly type = 'SET_POSTS';
  constructor(public payload: Post[]) { }
}

export type PostActionTypes = LoadPostsAction | SetPostsAction;
