import { Component } from '@angular/core';

@Component({
    selector: 'dish',
    styleUrls: ['dish.component.scss'],
    template: `
        <div class="dish">
            <div class="dish__title">
                <h1>
                    <img src="/img/dish.svg"/>
                    <span>Dish</span>
                </h1>
            </div>
            <dish-form></dish-form>
        </div>
    `
})

export class DishComponent{}