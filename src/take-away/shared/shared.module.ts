import { JoinPipe } from './pipes/join.pipe';
import { DishesService } from './services/dishes/dishes.service';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ],
    declarations: [
        ListItemComponent,
        JoinPipe
    ],
    exports: [
        ListItemComponent,
        JoinPipe
    ]
})

export class SharedModule{
    
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [
                DishesService
            ]
        }
    }
}