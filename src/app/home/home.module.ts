import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { AppRoutingModule } from '../app-routing.module'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = AppRoutingModule.getRoutes();

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class HomeModule { }
