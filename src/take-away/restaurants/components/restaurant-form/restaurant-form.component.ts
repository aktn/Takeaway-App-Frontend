import { Restaurant } from './../../../shared/services/restaurants/restaurants.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Output, SimpleChanges, Input, OnChanges } from '@angular/core';

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
                        <input type="text" formControlName="address">
                        <div class="error" *ngIf="checkAddress">
                            Address is missing!
                        </div>
                    </label>
                    <label id="label">
                        <h3>Post Code</h3>
                        <input type="text" formControlName="postCode">
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
                </div>
                <div class="restaurant-form__submit">
                    <div>
                        <button type="button" class="button" *ngIf="!exists" (click)="addRestaurant()">Add</button>
                        <button type="button" class="button" *ngIf="exists" (click)="editRestaurant()">Edit</button>
                        <a [routerLink]="['../']" class="button button--cancel">
                            Cancel
                        </a>
                    </div>
                    <div class="restaurant-form__delete" *ngIf="exists">
                        <div *ngIf="toggled">
                            <p>Delete item?</p>
                            <button class="confirm" type="button" (click)="removeRestaurant()">Yes</button>
                            <button class="cancel" type="button" (click)="toggle()">No</button>
                        </div>
                        <button class="button button--delete" type="button" (click)="toggle()">
                            Delete
                        </button>
                    </div>
                </div>
            </form>
        </div>
    `
})

export class RestaurantFormComponent implements OnChanges{

    exists = false;

    toggled = false;

    @Input()
    restaurant: Restaurant;

    @Output()
    create = new EventEmitter<Restaurant>();

    @Output()
    remove = new EventEmitter<Restaurant>();

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

    ngOnChanges(changes: SimpleChanges){
        if(this.restaurant && this.restaurant.name){
            this.exists = true;

            const value = this.restaurant;
            this.form.patchValue(value);
        }
    }

    toggle(){
        this.toggled = !this.toggled;
    }

    get checkName(){
        return this.form.get('name').hasError('required') && this.form.get('name').touched;
    }

    get checkAddress(){
        return this.form.get('address').hasError('required') && this.form.get('address').touched;
    }

    get checkPostCode(){
        return this.form.get('postCode').hasError('required') && this.form.get('postCode').touched;
    }

    get checkPhoneNumber(){
        return this.form.get('phoneNumber').hasError('required') && this.form.get('phoneNumber').touched;
    }

    addRestaurant(){
        this.create.emit(this.form.value);
    }

    removeRestaurant(){
        this.remove.emit(this.form.value);
    }
}