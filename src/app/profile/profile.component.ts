import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  posts: Post[];
  hasMore: boolean = true;

  constructor(private profileService: ProfileService) {
    this.profileService.getPosts(5).subscribe(posts => {
      this.posts = posts;
    });
  }

  onScroll() {
    if (this.posts.length == 20) {
      this.hasMore = false;
      return;
    }
    this.profileService.getPosts(5).subscribe(posts => {
      this.posts = this.posts.concat(posts);
    });
  }

  ngOnInit() {
  }
}
