import { Dish } from './../../../shared/services/dishes/dishes.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, OnChanges, ChangeDetectionStrategy, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'dish-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['dish-form.component.scss'],
    template: `
        <div class="dish-form">
            <form [formGroup]="form">
                <div class="dish-form__name">
                    <label>
                        <h3>Dish Name</h3>
                        <input type="text" formControlName="name" placeholder="Eg. Chicken Fried Rice" />
                        <div class="error" *ngIf="checkName">
                            Name is required!
                        </div>
                    </label>
                    <label id="label">
                        <h3>Price</h3>
                        <input type="text" formControlName="price" placeholder="Eg. 10" required />
                    </label>
                    <label id="label">
                        <h3>Category</h3>
                        <select formControlName="type">
                            <option value="">Select Type</option>
                            <option *ngFor="let type of types" [value]="type">{{ type }}</option>
                        </select>
                    </label>
                    <label>
                        <div class="error" *ngIf="checkPrice">
                            Price is required!
                        </div>
                        <div class="error" *ngIf="checkType">
                            Food type is required!
                        </div>
                    </label>
                </div>  
                <div class="dish-form__food">
                    <div class="dish-form__subtitle">
                        <h3>Ingredients</h3>
                        <button type="button" class="dish-form__add" (click)="addIngredients()">
                            <img src="/img/add-white.svg">Add Ingredients
                        </button>
                    </div>
                    <div formArrayName="ingredients">
                        <label *ngFor="let x of ingredients.controls; index as i;">
                            <input type="text" [formControlName]="i" placeholder="Eg. Cheese" />
                            <span class="dish-form__remove" (click)="removeIngredients(i)"></span>
                        </label>
                    </div>
                </div>
                <div class="dish-form__submit">
                    <div>
                        <button class="button" type="button" (click)="createDish()" *ngIf="!exists">
                            Create 
                        </button>
                        <button class="button" type="button" (click)="updateDish()" *ngIf="exists">
                            Update 
                        </button>
                        <a [routerLink]="['../']" class="button button--cancel">
                            Cancel
                        </a>
                    </div>
                </div>
            </form>
        </div>
    `
})

export class DishFormComponent implements OnChanges{

    types = [ 'starter', 'main', 'soup', 'salad', 'dessert', 'drinks' ];
    exists = false;

    constructor(private fb: FormBuilder){}

    @Input()
    dish: Dish;

    form = this.fb.group({
        name: ['', Validators.required],
        ingredients: this.fb.array(['']),
        price: ['', Validators.required],
        type: ['', Validators.required]
    });

    ngOnChanges(changes: SimpleChanges){
        if(this.dish && this.dish.name){
            this.exists = true;
            
            this.emptyIngredients();

            const value = this.dish;
            this.form.patchValue(value);
            if(value.ingredients){
                for(const item of value.ingredients){
                    this.ingredients.push(new FormControl(item));
                }
            }
        }
    }

    emptyIngredients(){
        while(this.ingredients.controls.length){
            this.ingredients.removeAt(0);
        }
    }

    get ingredients(){
        return this.form.get('ingredients') as FormArray;
    }

    get checkName(){
        return this.form.get('name').hasError('required') && this.form.get('name').touched;
    }

    get checkPrice(){
        return this.form.get('price').hasError('required') && this.form.get('price').touched;
    }

    get checkType(){
        return this.form.get('type').hasError('required') && this.form.get('type').touched;
    }

    addIngredients(){
        this.ingredients.push(new FormControl(''));
    }

    removeIngredients(i: number){
        this.ingredients.removeAt(i);
    }

    @Output() 
    create = new EventEmitter<Dish>();

    createDish(){
        if(this.form.valid){
            this.create.emit(this.form.value);
        }
    }

    @Output()
    update = new EventEmitter<Dish>();

    updateDish(){
        if(this.form.valid){
            this.update.emit(this.form.value);
        }
    }

    
}