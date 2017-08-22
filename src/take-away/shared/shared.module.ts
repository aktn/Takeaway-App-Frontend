import { ListItemComponent } from './../components/list-item/list-item.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ],
    declarations: [
        ListItemComponent
    ],
    exports: [
        ListItemComponent
    ]
})

export class SharedModule{
    constructor(){}

}