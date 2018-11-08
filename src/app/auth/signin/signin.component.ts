import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/reducers/auth.reducer';
import { LoginAction } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  error$: Observable<string> = null;

  constructor(
    private store: Store<AuthState>
  ) { }

  ngOnInit() {
    this.error$ = this.store.select('auth').pipe(pluck('error'));
    console.log('erroStore:', this.error$)
  }

  userSignIn() {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LoginAction(payload));
  }

}
