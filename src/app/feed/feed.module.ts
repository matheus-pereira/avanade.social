import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { PostsModule } from '../posts/posts.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, PostsModule, InfiniteScrollModule],
  exports: [FeedComponent]
})
export class FeedModule { }
