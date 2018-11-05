import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';
import { TimelineComponent } from './timeline.component';
import { TimelineService } from './timeline.service';

@NgModule({
  declarations: [
    TimelineComponent,
    NewPostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule
  ],
  providers: [
    TimelineService
  ]
})
export class TimelineModule { }