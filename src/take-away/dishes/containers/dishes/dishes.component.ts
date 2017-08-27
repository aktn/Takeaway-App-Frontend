import { Subscription } from 'rxjs/Subscription';
import { Store } from './../../../../store';
import { Observable } from 'rxjs/Observable';
import { Dish, DishesService } from './../../../shared/services/dishes/dishes.service';
import { Component, OnInit } from '@angular/core';

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
                <div *ngIf="dishes$ | async as dishes; else loading;">
                    <div *ngIf="!dishes.length" class="message">
                        <img src="img/face.svg">Start adding a new dish 
                    </div>
                    <list-item *ngFor="let dish of dishes" [item]="dish" (remove)="removeDish($event)"></list-item>
                </div>
                <ng-template #loading>
                    <div class="message">
                        <img src="img/loading.svg"> Loading dishes..
                    </div>
                </ng-template>
            </div>
        </div>
    `
})

export class DishesComponent implements OnInit{

    dishes$: Observable<Dish[]>;
    subscription: Subscription;

    constructor(
        private store: Store,
        private dishesService: DishesService
    ){}

    ngOnInit(){
        this.dishes$ = this.store.select<Dish[]>('dishes');
        this.subscription = this.dishesService.dishes$.subscribe();
    }

    removeDish(event: Dish){
        this.dishesService.deleteDish(event.$key);
    }
}   