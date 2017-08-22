import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'auth-form',
    styleUrls: ['auth-form.component.scss'],
    template: `
        <div class="auth-form">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <ng-content select="h2"></ng-content>
                <label>
                    <input type="text" formControlName="email" placeholder="Email address">
                </label>
                <label>
                    <input type="password" formControlName="password" placeholder="Password">
                </label>

                <div class="error" *ngIf="emailInvalid">
                    Oops..Email is invalid
                </div>
                <div class="error" *ngIf="passwordInvalid">
                    Oops..Password is invalid
                </div>
                <ng-content class=".error"></ng-content>

                <div class="auth-form__btn">
                    <ng-content select="button"></ng-content>
                </div>
                <div class="auth-form__link">
                    <ng-content select="a"></ng-content>
                </div>
            </form>
        </div>
    `
})

export class AuthFormComponent{
    constructor(private fb: FormBuilder){}
    
    @Output()
    submitted = new EventEmitter<FormGroup>();

    form = this.fb.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
    });

    get emailInvalid(){
        const validator = this.form.get('email');
        return validator.hasError('email') && validator.touched;
    }

    get passwordInvalid(){
        const validator = this.form.get('password');
        return validator.hasError('required') && validator.touched;
    }

    onSubmit(){
        if(this.form.valid){
            console.log(this.form);
            this.submitted.emit(this.form);
        }
    }
}