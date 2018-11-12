import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  @Output() newPost = new EventEmitter<Post>();
  text: string = '';

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onPost() {
    this.postService.createPost(this.text)
      .subscribe(post => {
        this.newPost.emit(post);
        this.text = '';
      });
  }

}
