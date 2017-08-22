import { Router } from '@angular/router';
import { AuthService } from './../../../auth/shared/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <app-header (logout)="onLogout()"></app-header>
      <app-nav></app-nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onLogout(){
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
