import { Component } from '@angular/core';

@Component({
    selector: 'register',
    styleUrls: ['register.component.scss'],
    template: `
        <div>
            Reigster
            <auth-form></auth-form>
        </div>
    `
})

export class RegisterComponent{
    constructor(){}
}