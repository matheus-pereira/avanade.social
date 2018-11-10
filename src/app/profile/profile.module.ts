import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PostsModule } from '../posts/posts.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    PostsModule,
    InfiniteScrollModule
  ]
})
export class ProfileModule { }
