import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DishesService, Dish } from './../../../shared/services/dishes/dishes.service';
import { AuthService } from './../../../../auth/shared/services/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'dish',
    styleUrls: ['dish.component.scss'],
    template: `
        <div class="dish">
            <div class="dish__title">
                <h1>
                    <img src="/img/dish.svg"/>
                    <span *ngIf="dish$ | async as dish; else title;">{{ dish.name ? 'Edit' : 'Create' }}Dish</span>
                    <ng-template #title>
                        Loading dishes...
                    </ng-template>
                </h1>
            </div>
            <div *ngIf="dish$ | async as dish; else loading">
                <dish-form [dish]="dish" (create)="createDish($event)"></dish-form>
            </div>
            <ng-template #loading>
                <div class="message"><img src="/img/loading.svg">Loading...</div>
            </ng-template>
        </div>
    `
})

export class DishComponent implements OnInit, OnDestroy{
    dish$ : Observable<Dish>;
    subscription: Subscription;

    ngOnInit(){
        this.subscription = this.dishesService.dishes$.subscribe();
        this.dish$ =  this.route.params
            .switchMap(param => this.dishesService.retrieveDish(param.id));
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    constructor(
        private dishesService: DishesService,
        private router: Router,
        private route: ActivatedRoute
    ){}

    async createDish(event: Dish){
        await this.dishesService.createDish(event);
        this.backToDishes();
    }

    backToDishes(){
        this.router.navigate(['dishes']);
    }
}