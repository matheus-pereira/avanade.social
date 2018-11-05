import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './timeline.component';
import { TimelineService } from './timeline.service';
import { PostsModule } from '../posts/posts.module';

@NgModule({
  declarations: [
    TimelineComponent
  ],
  imports: [
    CommonModule,
    PostsModule
  ],
  providers: [
    TimelineService
  ]
})
export class TimelineModule { }