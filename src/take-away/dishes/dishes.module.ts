import { DishesComponent } from './containers/dishes/dishes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    { path: '', component: DishesComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ],
    declarations: [
        DishesComponent
    ]
})

export class DishesModule{}