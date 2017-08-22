import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../../shared/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'register',
    styleUrls: ['register.component.scss'],
    template: `
        <div>
            <auth-form (submitted)="registerUser($event)">
                <h2>Register</h2>
                <button type="submit">Register</button>
                <a routerLink="/auth/login">Already a member?</a>
                <div class="error" *ngIf="error">
                    {{ error }}
                </div>
            </auth-form>
        </div>
    `
})

export class RegisterComponent{
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    error: string;

    async registerUser(event: FormGroup){
        try{
            await this.authService.createUser(event.value.email, event.value.password); 
            this.router.navigate(['/']);
        }
        catch(err){
            this.error = err.message;
        }
    }
}