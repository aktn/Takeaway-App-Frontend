import { Component } from '@angular/core';

@Component({
    selector: 'register',
    styleUrls: ['register.component.scss'],
    template: `
        <div>
            <auth-form>
                <h2>Register</h2>
                <button type="submit">Register</button>
                <a routerLink="/auth/login">Haven't registered?</a>
            </auth-form>
        </div>
    `
})

export class RegisterComponent{
    constructor(){}
}