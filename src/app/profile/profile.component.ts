import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../posts/post.service';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  posts: Post[];
  user: User;
  hasMore: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private postService: PostService
  ) { }

  ngOnInit() {
    let observable;
    if (this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params['id']) {
      observable = this.userService.getUserAsync(this.activatedRoute.snapshot.params.id);
    } else {
      observable = this.userService.getUser();
    }

    observable.subscribe(
      user => {
        this.user = user;
        this.postService.getPosts({ userId: this.user.id })
          .subscribe(posts => this.posts = posts);
      },
      error => {
        this.router.navigate(['not-found']);
      }
    );
  }

  onScroll() {
    const lastPost = this.posts[this.posts.length - 1];
    this.postService.getPosts({ userId: this.user.id, fromDate: lastPost.createdAt.toString() })
      .subscribe(posts => {
        if (!posts) {
          return this.hasMore = false;
        }

        this.posts = this.posts.concat(posts)
      });
  }
}
