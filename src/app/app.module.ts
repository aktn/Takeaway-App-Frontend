import { AppHeaderComponent } from './components/app-header/app-header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { TakeAwayModule } from './../take-away/take-away.module';
import { AuthModule } from './../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { AppNavComponent } from './components/app-nav/app-nav.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dishes' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    TakeAwayModule
  ],
  declarations: [
    AppComponent,
    AppNavComponent,
    AppHeaderComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
