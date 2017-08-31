import { RestaurantComponent } from './containers/restaurant/restaurant.component';
import { SharedModule } from './../../auth/shared/shared.module';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantsComponent } from './containers/restaurants/restaurants.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    { path: '', component: RestaurantComponent }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        RestaurantsComponent,
        RestaurantFormComponent,
        RestaurantComponent
    ]
})

export class RestaurantsModule{

}