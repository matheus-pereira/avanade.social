import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class HomeModule { }
