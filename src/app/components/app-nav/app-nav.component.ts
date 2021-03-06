import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-nav.component.scss'],
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="dishes" routerLinkActive="active">Dishes</a>
                <a routerLink="restaurants" routerLinkActive="active">Restaurants</a>
            </div>
        </div>
    `
})

export class AppNavComponent{

}