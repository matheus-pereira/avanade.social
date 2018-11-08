import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { FeedComponent } from './feed/feed/feed.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { PostComponent } from './feed/post/post.component';

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
    path: 'feed/:post',
    canActivate: [AuthGuard],
    component: PostComponent
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
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
