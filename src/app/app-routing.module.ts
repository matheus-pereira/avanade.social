import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/auth/auth.guard';
import { FeedComponent } from './feed/feed.component';
import { HomeGuard } from './home/home.guard';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SigninComponent,
    canActivate: [HomeGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [HomeGuard]
  },
  {
    path: 'feed',
    canActivate: [AuthGuard],
    component: FeedComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  static getRoutes(): Routes {
    return routes;
  }

}
