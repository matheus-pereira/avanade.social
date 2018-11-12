import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  confirmPassword = '';

  user: NewUser = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  errorMessage: string = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    this.authService.signUp(this.user)
      .subscribe(() => {
        this.router.navigate(['', 'feed']);
      },
        (error) => {
          if (error.status && error.status === 401) {
            this.errorMessage = 'Por favor verifique os campos e tente novamente.';
          } else {
            this.errorMessage = 'Não foi possível realizar seu cadastro. Por favor, tente novamente mais tarde.';
          }
        });
  }

  confirmatePass(): boolean {
    if (this.confirmPassword !== this.user.password) {
      return true;
    }
    return false;
  }

}
