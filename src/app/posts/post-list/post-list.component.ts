import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];
  
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLikeClick(event) {
    let callback;
    if (event.liked) {
      callback = this.postService.likePost(event.postId);
    } else {
      callback = this.postService.unlikePost(event.postId);
    }
    callback.subscribe((response) => console.log(response));
  }
}
