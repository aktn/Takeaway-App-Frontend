import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Restaurant, RestaurantsService } from './../../../shared/services/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'restaurant',
    styleUrls: ['restaurant.component.scss'],
    template: `
        <div class="restaurant">
            <div class="restaurant__title">
                <h1>
                    <img src="/img/dish.svg"/>
                    <span *ngIf="restaurant$ | async as restaurant; else title;">{{ restaurant.name ? 'Edit' : 'Create' }}Restaurant</span>
                    <ng-template #title>
                        Loading places...
                    </ng-template>
                </h1>
            </div>
            <restaurant-form (create)="createRestaurant($event)"></restaurant-form>
        </div>
    `
})

export class RestaurantComponent implements OnInit, OnDestroy{

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private restaurantsService: RestaurantsService
    ){}

    restaurant$: Observable<Restaurant>;
    subscription: Subscription;

    ngOnInit(){
        this.subscription = this.restaurantsService.restaurants$.subscribe();
        this.restaurant$ =  this.route.params
            .switchMap(param => this.restaurantsService.getRestaurant(param.id));
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    async createRestaurant(event: Restaurant){
        await this.restaurantsService.addRestaurant(event);
        this.backToRestaurants();
    }

    backToRestaurants(){
        this.router.navigate(['restaurants']);
    }
    
}