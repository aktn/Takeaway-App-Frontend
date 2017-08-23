import { DishComponent } from './containers/dish/dish.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { DishesComponent } from './containers/dishes/dishes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    { path: '', component: DishesComponent },
    { path: 'new', component: DishComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ],
    declarations: [
        DishesComponent,
        DishComponent,
        DishFormComponent
    ]
})

export class DishesModule{}