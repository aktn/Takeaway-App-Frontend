import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Store } from './../../../../store';
import { Restaurant, RestaurantsService } from './../../../shared/services/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'restaurants',
    styleUrls: ['restaurants.component.scss'],
    template: `
        <div>
            <div class="restaurants">
                <div class="restaurants__title">
                    <h1><img src="/img/dish.svg"/>Restaurants</h1>
                    <a class="btn__add" [routerLink]="['../restaurants/new']">
                        <img src="/img/add-white.svg">New place
                    </a>
                </div>
                <div *ngIf="restaurants$ | async as restaurants; else loading;">
                    <div *ngIf="!restaurants.length" class="message">
                        <img src="/img/face.svg">Start adding a new location!
                    </div>
                    <list-item *ngFor="let restaurant of restaurants" [item]="restaurant" (remove)="removeRestaurant($event)"></list-item>
                </div>
                <ng-template #loading>
                    <div class="message">
                        <img src="/img/loading"> Loading places...
                    </div>
                </ng-template>
            </div>
        </div>
    `
})

export class RestaurantsComponent implements OnInit{
    constructor(private route: ActivatedRoute,
        private store: Store,
        private restaurantsService: RestaurantsService){}

    restaurants$: Observable<Restaurant[]>;
    subscription: Subscription;

    ngOnInit(){
        this.restaurants$ = this.store.select<Restaurant[]>('restaurants');
        this.subscription = this.restaurantsService.restaurants$.subscribe();
    }

    removeRestaurant(event: Restaurant){
        return this.restaurantsService.removeRestaurant(event.$key);
    }

}
