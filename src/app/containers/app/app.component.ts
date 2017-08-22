import { Store } from './../../../store';
import { Router } from '@angular/router';
import { AuthService, User } from './../../../auth/shared/services/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <app-header [user]="user$ | async" (logout)="onLogout()"></app-header>
      <app-nav *ngIf="(user$ | async)?.authenticated"></app-nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  user$ : Observable<User>;
  subscription: Subscription;

  ngOnInit(){
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  async onLogout(){
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
