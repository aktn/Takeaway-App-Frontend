import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-nav.component.scss'],
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="meal" routerLinkActive="active">Main Dishes</a>
                <a routerLink="meal" routerLinkActive="active">Soups</a>
                <a routerLink="meal" routerLinkActive="active">Snacks</a>
                <a routerLink="meal" routerLinkActive="active">Salads</a>
                <a routerLink="meal" routerLinkActive="active">Drinks</a>
            </div>
        </div>
    `
})

export class AppNavComponent{

}