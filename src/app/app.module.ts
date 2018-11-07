import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { TimelineModule } from './timeline/timeline.module';
import PostReducer from './store/reducers/post.reducer';
import { PostEffects } from './store/effects/post.effect';
import AuthReducer from './store/reducers/auth.reducer';
import { AuthEffects } from './store/effects/auth.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      auth: AuthReducer,
      posts: PostReducer
    }),
    EffectsModule.forRoot([
      AuthEffects,
      PostEffects
    ]),
    CoreModule,
    TimelineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
