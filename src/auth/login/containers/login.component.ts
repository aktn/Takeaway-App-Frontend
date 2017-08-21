import { Component } from '@angular/core';

@Component({
    selector: 'login',
    styleUrls: ['login.component.scss'],
    template: `
        <div>
            <auth-form>
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
    constructor(){}

    error: string;



}