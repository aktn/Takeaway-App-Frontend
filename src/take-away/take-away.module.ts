import { SharedModule } from './../auth/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    { path: 'mains', loadChildren: './dishes/dishes.module#DishesModule' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule
    ]
})

export class TakeAwayModule{
    constructor(){}

}