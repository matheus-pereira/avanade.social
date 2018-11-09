import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  errorMessage: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signin() {
    this.authService.authenticate(this.user.email, this.user.password)
      .subscribe(
        () => {
          this.router.navigate(['', 'feed']);
        },
        (error) => {
          if (error.status && error.status === 401) {
            this.errorMessage = 'E-mail e/ou senha incorretos.';
          } else {
            this.errorMessage = 'Não foi possível realizar seu login. Por favor, tente novamente mais tarde.';
          }
        }
      );
  }

}
