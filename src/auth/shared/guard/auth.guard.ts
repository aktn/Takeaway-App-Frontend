import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './../services/auth/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(){
        return this.authService.authState
            .map((user) => {
                if(!user){
                    this.router.navigate(['/auth/login']);
                }
                return !!user;
            });
    }
}
