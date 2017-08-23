import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';

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
                    </label>
                    <label id="label">
                        <h3>Price</h3>
                        <input type="text" formControlName="price" placeholder="Eg. 10" />
                    </label>
                    <label id="label">
                        <h3>Category</h3>
                        <select formControlName="category_id">
                                <option value="">Select Category</option>
                        </select>
                    </label>
                </div>  
                <div class="dish-form__food">
                    <div class="dish-form__subtitle">
                        <h3>Ingredients</h3>
                        <button type="button" class="dish-form__add">
                            <img src="/img/add-white.svg">Add Ingredients
                        </button>
                    </div>
                    <div formArrayName="ingredients">
                        <label *ngFor="let x of ingredients.controls; index as i;">
                            <input type="text" [formControlName]="i" placeholder="Eg. Cheese" />
                            <span class="dish-form__remove"></span>
                        </label>
                    </div>
                </div>
                <div class="dish-form__submit">
                    <div>
                        <button class="button" type="button">
                            Create 
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

export class DishFormComponent{
    constructor(private fb: FormBuilder){}

    form = this.fb.group({
        name: ['', Validators.required, Validators.minLength(2)],
        ingredients: this.fb.array(['']),
        price: ['', Validators.required]
    });

    get ingredients(){
        return this.form.get('ingredients') as FormArray;
    }
}