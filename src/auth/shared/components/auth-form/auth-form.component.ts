import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.scss'],
    template: `
        <div class="auth-form" [formGroup]="form" (ngSumbit)="onSubmit()">
            <ng-content select="h2"></ng-content>
            <label>
                <input type="text" formControlName="email" placeholder="Email address">
            </label>
            <label>
                <input type="text" formControlName="password" placeholder="Password">
            </label>
            <div class="auth-form__btn">
                <ng-content select="button"></ng-content>
            </div>
            <div class="auth-form__link">
                <ng-content select="a"></ng-content>
            </div>
        </div>
    `
})

export class AuthFormComponent{
    constructor(private fb: FormBuilder){}

    form = this.fb.group({
        email: ['', Validators.email ],
        password: ['', Validators.required]
    });
}