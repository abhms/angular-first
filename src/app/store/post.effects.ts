import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadPosts, loadPostsSuccess, loadPostsFailure } from './post.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from './post.service';

@Injectable()
export class PostEffects {
  private actions$ = inject(Actions);  
  private postService = inject(PostService);  

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => loadPostsSuccess({ posts })),
          catchError((error) => of(loadPostsFailure({ error: error.message })))
        )
      )
    )
  );
}
