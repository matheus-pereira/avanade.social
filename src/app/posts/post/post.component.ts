import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  public liked = false;
  public likeCount = 0;

  constructor() { }

  ngOnInit() {
  }

  likePost(e) {
    e.preventDefault();
    this.liked = !this.liked;
    this.liked ? this.likeCount += 1 : this.likeCount -= 1;
  }

}