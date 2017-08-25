import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DishesService, Dish } from './../../../shared/services/dishes/dishes.service';
import { AuthService } from './../../../../auth/shared/services/auth/auth.service';
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
            <dish-form (create)="createDish($event)"></dish-form>
        </div>
    `
})

export class DishComponent{
    dish$ : Observable<Dish>;

    constructor(
        private dishesService: DishesService,
        private router: Router
    ){}

    async createDish(event: Dish){
        await this.dishesService.createDish(event);
        this.backToDishes();
    }

    backToDishes(){
        this.router.navigate(['dishes']);
    }
}