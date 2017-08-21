import { Component } from '@angular/core';

@Component({
    selector: 'login',
    styleUrls: ['login.component.scss'],
    template: `
        <div>
            Login
            <auth-form></auth-form>
        </div>
    `
})

export class LoginComponent{
    constructor(){}
}