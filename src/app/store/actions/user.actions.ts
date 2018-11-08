import { Action } from '@ngrx/store';

export class SetUserAction implements Action {
    readonly type = 'SET_USER';
    constructor(public payload: User) { }
}


export type UserActionTypes = SetUserAction;