import { Component, OnInit } from '@angular/core';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Post[];
  hasMore: boolean = true;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  onScroll() {
    const lastPost = this.posts[this.posts.length - 1];
    this.postService.getPosts({ fromDate: lastPost.createdAt.toString() })
      .subscribe(posts => {
        if (!posts) {
          return this.hasMore = false;
        }

        this.posts = this.posts.concat(posts)
      });
  }

}
