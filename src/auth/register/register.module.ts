import { SharedModule } from './../shared/shared.module';
import { RegisterComponent } from './containers/register.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
    { path: '', component: RegisterComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        RegisterComponent
    ]
})

export class RegisterModule{}