import { Restaurant } from './../../../shared/services/restaurants/restaurants.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'restaurant-form',
    styleUrls: ['restaurant-form.component.scss'],
    template: `
        <div class="restaurant-form">
            <form [formGroup]="form">
                <div class="restaurant-form__name">
                    <label>
                        <h3>Restaurant Name</h3>
                        <input type="text" formControlName="name">
                        <div class="error" *ngIf="checkName">
                            Name is missing!
                        </div>
                    </label>
                    <label>
                        <h3>Address</h3>
                        <input type="text" formContolName="address">
                        <div class="error" *ngIf="checkAddress">
                            Address is missing!
                        </div>
                    </label>
                    <label id="label">
                        <h3>Post Code</h3>
                        <input type="text" formContorlName="postCode">
                        <div class="error" *ngIf="checkPostCode">
                            Post code is missing!
                        </div>
                    </label>
                    <label id="label">
                        <h3>Phone Number</h3>
                        <input type="text" formControlName="phoneNumber">
                        <div class="error" *ngIf="checkPhoneNumber">
                            Phone number is missing!
                        </div>
                    </label>
                    <h3>Opening Hours</h3>
                    <label *ngFor="let day of days; index as i;">
                        <div class="box">
                            <h3>{{ day }} </h3>
                                <div class="box__time">
                                    From
                                    <input type="text">
                                    <input type="text">
                                </div>
                                <div class="box__time">
                                    Till
                                    <input type="text">
                                    <input type="text"> 
                                </div>
                        </div>
                    </label> 
                </div>
                <div class="restaurant-form__submit">
                    <button type="button" class="button" *ngIf="!exists" (click)="addRestaurant()">Add</button>
                    <button type="button" class="button" *ngIf="exists" (click)="editRestaurant()">Edit</button>
                    <a [routerLink]="['../']" class="button button--cancel">
                        Cancel
                    </a>
                </div>
            </form>
        </div>
    `
})

export class RestaurantFormComponent{

    exists = false;

    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    @Output()
    create = new EventEmitter<Restaurant>();

    constructor(
        private fb: FormBuilder
    ){}

    form = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        postCode: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        openingTimes: this.fb.array([''])
    });

    get checkName(){
        return this.form.get('name').hasError('required') && this.form.get('name').touched;
    }

    get checkAddress(){
        return this.form.get('address').hasError('required') && this.form.get('address').touched;
    }

    get checkPostCode(){
        return this.form.get('postCode').hasError('required') && this.form.get('postCode').touched;
    }

    get checkphoneNumber(){
        return this.form.get('phoneNumber').hasError('required') && this.form.get('phoneNumber').touched;
    }

    addRestaurant(){
        this.create.emit(this.form.value);
    }
}