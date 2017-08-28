import { MenuListComponent } from './components/menu-list/menu-list.component';
import { JoinPipe } from './../shared/pipes/join.pipe';
import { MenuComponent } from './containers/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const ROUTES : Routes = [
    { path: '', component: MenuComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ],
    declarations: [
        MenuComponent,
        MenuListComponent
    ]
})

export class MenuModule{

}
