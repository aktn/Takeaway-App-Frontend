import { Subscription } from 'rxjs/Subscription';
import { Dish, DishesService } from './../../shared/services/dishes/dishes.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from 'store';

@Component({
    selector: 'menu',
    styleUrls: ['menu.component.scss'],
    template: `
        <div>   
            <div class="menu">
                <div class="menu__title">
                    <h1><img src="/img/food.svg"/>Menu</h1>
                </div>
                <div *ngIf="menu$ | async as menus;else loading;">
                    <menu-list *ngFor="let menu of menus" [menu]="menu"></menu-list>
                </div>
                <ng-template #loading>
                    <div class="message">
                        <img src="img/loading.svg"> Loading menu..
                    </div>
                </ng-template>
            </div>
        </div>
    `
})

export class MenuComponent implements OnInit{
    constructor(
        private store: Store,
        private dishesService: DishesService
    ){}

    menu$: Observable<Dish[]>;
    subscription: Subscription;

    ngOnInit(){
        this.menu$ = this.store.select<Dish[]>('dishes');
        this.subscription = this.dishesService.dishes$.subscribe();
    }
}
