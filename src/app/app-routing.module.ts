import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './core/auth/auth.guard';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeGuard } from './home/home.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feed'
  },
  {
    path: 'feed',
    canActivate: [AuthGuard],
    component: FeedComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent
  },
  {
    path: 'user/:id',
    canActivate: [AuthGuard],
    component: ProfileComponent
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [HomeGuard]
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
export class AppRoutingModule { }
