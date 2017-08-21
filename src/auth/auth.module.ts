import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyCMN9ZJUdK3wo7us9z9wu97Mcc4vy9htrM",
    authDomain: "takeaway-131be.firebaseapp.com",
    databaseURL: "https://takeaway-131be.firebaseio.com",
    projectId: "takeaway-131be",
    storageBucket: "takeaway-131be.appspot.com",
    messagingSenderId: "554242887269"
};

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path:'', pathMatch:'full', redirectTo: 'login' },
            { path:'login', loadChildren: './login/login.module#LoginModule' },
            { path:'register', loadChildren: './register/register.module#RegisterModule' }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule
    ]
})

export class AuthModule{

}