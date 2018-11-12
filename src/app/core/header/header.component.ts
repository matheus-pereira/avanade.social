import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User> = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }

  getUserFirstName(userName:string ) {
    return userName.split(' ')[0];
  }

  logout(e) {
    e.preventDefault();
    this.userService.logout();
    this.router.navigate(['']);
  }

}
