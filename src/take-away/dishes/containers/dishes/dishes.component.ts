import { Component } from '@angular/core';

@Component({
    selector: 'dishes',
    styleUrls: ['dishes.component.scss'],
    template: `
        <div>
            <div class="dishes">
                <div class="dishes__title">
                    <h1><img src="/img/dish.svg"/>Dishes</h1>
                    <a class="btn__add" [routerLink]="['../dishes/new']">
                        <img src="/img/add-white.svg">New dishes
                    </a>
                </div>
            </div>
        </div>
    `
})

export class DishesComponent{

}