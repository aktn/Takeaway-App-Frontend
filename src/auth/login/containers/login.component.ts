import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'login',
    styleUrls: ['login.component.scss'],
    template: `
        <div>
            <auth-form (submitted)="loginUser($event)">
                <h2>Login</h2>
                <button type="submit">Login</button>
                <a routerLink="/auth/register">Haven't registered?</a>
                <div class="error" *ngIf="error">
                    {{ error }}
                </div>
            </auth-form>
        </div>
    `
})

export class LoginComponent{
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    error: string;

    async loginUser(event: FormGroup){
        try{
            await this.authService.loginUser(event.value.email, event.value.password);
            this.router.navigate(['/']);
        }
        catch(err){
            this.error = err.message;
        }
    }



}