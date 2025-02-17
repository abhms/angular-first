import { selectPosts, selectLoading, selectError } from './../store/post.selectors';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPosts } from '../store/post.actions';
import { Post } from '../store/post.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css'],
  imports: [CommonModule],
})
export class GetapiComponent implements OnInit {
  posts$: Observable<Post[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  data: Post[] = []; 

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectPosts);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit() {
    this.store.dispatch(loadPosts());

    this.posts$.subscribe((posts) => {
      this.data = posts;
    });
  }
}
