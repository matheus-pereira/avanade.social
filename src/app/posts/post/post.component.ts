import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

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
