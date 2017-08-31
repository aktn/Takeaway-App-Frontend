import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../../../auth/shared/services/auth/auth.service';
import { Store } from './../../../../store';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';

export interface Restaurant{
    name: string,
    address: string,
    postCode: string,
    phoneNumber: string,
    openingTimes: string[],
    $key: string,
    timestamps: number,
    $exists: () =>boolean
}

@Injectable()
export class RestaurantsService{
    constructor(
        private db: AngularFireDatabase,
        private store: Store,
        private authService: AuthService
    ){}

    restaurants$: Observable<Restaurant[]> = this.db.list(`restaurants/${this.userId}`).do(next => this.store.set('restaurants',next));

    get userId(){
        return this.authService.user.uid;
    }

    addRestaurant(restaurant: Restaurant){
        return this.db.list(`restaurants/${this.userId}`).push(restaurant);
    }

    getRestaurant(key: string){
        if(!key) return Observable.of({});
        return this.store.select<Restaurant[]>('restaurants').filter(Boolean)
            .map(restaurants => restaurants.find((restaurant: Restaurant) => restaurant.$key === key));
    }

    updateRestaurant(key: string, restaurant: Restaurant){
        return this.db.object(`restaurants/${this.userId}/${key}`).update(restaurant);
    }

    removeRestaurant(key: string){
        return this.db.list(`restaurants/${this.userId}`).remove(key);
    }
}