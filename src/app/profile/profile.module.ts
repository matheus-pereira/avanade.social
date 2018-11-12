import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PostsModule } from '../posts/posts.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PostsModule,
    InfiniteScrollModule
  ]
})
export class ProfileModule { }
