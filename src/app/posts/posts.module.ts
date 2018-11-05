import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    PostComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostComponent,
    NewPostComponent
  ]
})
export class PostsModule { }
