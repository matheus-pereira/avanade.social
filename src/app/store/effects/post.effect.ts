import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { PostService } from '../services/post.service';
import { LoadPostsAction, SetPostsAction } from '../actions/post.actions';
import { Observable } from 'rxjs';

@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) { }

  @Effect() loadPosts(): Observable<SetPostsAction> {
    return this.actions$
      .ofType('LOAD_POSTS')
      .pipe(
        switchMap((action: LoadPostsAction) => {
          return this.postService.getPosts(action.payload).pipe(map((posts) => new SetPostsAction(posts)));
        })
      );
  }

}