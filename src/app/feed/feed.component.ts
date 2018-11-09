import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Post[];
  hasMore: boolean = true;

  constructor(private feedService: FeedService) {
    this.feedService.getPosts(5).subscribe(posts => {
      this.posts = posts;
    });
  }

  onScroll() {
    if (this.posts.length == 20) {
      this.hasMore = false;
      return;
    }
    this.feedService.getPosts(5).subscribe(posts => {
      this.posts = this.posts.concat(posts);
    });
  }

  ngOnInit() {
  }

}
