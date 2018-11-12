import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output('like') onLikeClick = new EventEmitter();
  liked: boolean = true;
  likeCount: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.likeCount = this.post.likes.length;
    this.userService
      .getUser()
      .subscribe(user => this.liked = !!this.post.likes.find(like => like.id == user.id));
  }

  likePost(e) {
    e.preventDefault();
    this.liked = !this.liked;
    this.onLikeClick.emit({ postId: this.post.id, liked: this.liked });
    this.liked ? this.likeCount++ : this.likeCount--;
  }
}