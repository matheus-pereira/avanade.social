import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PostComponent,
    NewPostComponent,
    PostListComponent
  ],
  exports: [
    PostComponent,
    NewPostComponent,
    PostListComponent
  ]
})
export class PostsModule { }
