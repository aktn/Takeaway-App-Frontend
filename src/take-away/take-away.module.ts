import { AuthGuard } from './../auth/shared/guard/auth.guard';
import { SharedModule } from './../auth/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    { path: 'dishes', canActivate: [AuthGuard], loadChildren: './dishes/dishes.module#DishesModule' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ]
})

export class TakeAwayModule{
    constructor(){}

}