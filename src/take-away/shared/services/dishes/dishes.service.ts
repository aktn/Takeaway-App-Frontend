import { Dish } from './dishes.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Store } from './../../../../store';
import { AuthService } from './../../../../auth/shared/services/auth/auth.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export interface Dish{
    name: string,
    price: number,
    type: string,
    ingredients: string[],
    $key: string,
    timestamps: number,
    $exists: () => boolean
}

@Injectable()
export class DishesService{
    constructor(
        private store: Store,
        private authService: AuthService,
        private db: AngularFireDatabase
    ){}

    dishes$: Observable<Dish[]> = this.db.list(`dishes/${this.userId}`).do(next => this.store.set('dishes',next));
    
    get userId(){
        return this.authService.user.uid;
    }

    createDish(dish: Dish){
        return this.db.list(`dishes/${this.userId}`).push(dish);
    }

    retrieveDish(key: string){
        if(!key) return Observable.of({});
        return this.store.select<Dish[]>('dishes').filter(Boolean)
            .map(dishes => dishes.find((dish: Dish) => dish.$key === key));
    }

    updateDish(key: string, dish: Dish){
        return this.db.object(`dishes/${this.userId}/${key}`).update(dish);
    }

    deleteDish(key: string){
        return this.db.list(`dishes/${this.userId}`).remove(key);
    }

}