import { Restaurant } from './take-away/shared/services/restaurants/restaurants.service';
import { Dish } from './take-away/shared/services/dishes/dishes.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './auth/shared/services/auth/auth.service';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

export interface State {
  [key: string]: any,
  user: User,
  dishes: Dish[],
  restaurants: Restaurant[],
}

const state: State = {
  user: undefined,
  dishes: undefined,
  restaurants: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
