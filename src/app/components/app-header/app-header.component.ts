import { User } from './../../../auth/shared/services/auth/auth.service';
import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-header.component.scss'],
    template: `
        <div class="app-header">
            <div class="wrapper">
                <img src="/img/takeaway.svg">
                <div class="app-header__userInfo" *ngIf="user?.authenticated">
                    <span (click)="logoutUser()"></span>
                </div>
            </div>
        </div>
    `
})

export class AppHeaderComponent{

    @Input()
    user: User;

    @Output()
    logout = new EventEmitter<any>();

    logoutUser(){
        this.logout.emit();
    }

}
