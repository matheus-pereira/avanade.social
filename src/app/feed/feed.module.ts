import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    FeedComponent,
    PostComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedModule { }
