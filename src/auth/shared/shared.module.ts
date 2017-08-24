import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule 
    ],
    declarations: [
        AuthFormComponent
    ],
    exports: [
        AuthFormComponent
    ]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [
                AuthService,
                AuthGuard
            ]
        }
    }
}