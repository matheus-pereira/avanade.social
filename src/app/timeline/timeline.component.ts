import { Component, OnInit } from '@angular/core';
import { TimelineService } from './timeline.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private timelineService: TimelineService) {
    this.posts$ = this.timelineService.getPosts();
  }

  ngOnInit() {
  }

}
