import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  posts: Post[];
  hasMore: boolean = true;
  user: any = {};

  constructor(
    private profileService: ProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    activatedRoute.params.subscribe(params => {
      profileService.getUser(params.id).subscribe((user) => {
        this.user = user;
      }, (error) => {
        this.router.navigateByUrl('/not-found');
      });
    });
    this.profileService.getPosts(5).subscribe(posts => {
      this.posts = posts;
    }, (error) => {
      console.log("erro getPosts", error);
    });
  }

  onScroll() {
    if (this.posts.length == 20) {
      this.hasMore = false;
      return;
    }
    this.profileService.getPosts(5).subscribe(posts => {
      this.posts = this.posts.concat(posts);
    }, (error) => {
      console.log("erro onScroll", error);
    });
  }

  ngOnInit() {
  }

}
