import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './../auth/shared/guard/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    { path: 'dishes', canActivate: [AuthGuard], loadChildren: './dishes/dishes.module#DishesModule' },
    { path: 'menu', canActivate: [AuthGuard], loadChildren: './menu/menu.module#MenuModule' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ]
})

export class TakeAwayModule{
    constructor(){}

}