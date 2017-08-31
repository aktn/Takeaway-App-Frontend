import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['app-nav.component.scss'],
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="dishes/main" routerLinkActive="active">Mains</a>
                <a routerLink="dishes/starter" routerLinkActive="active">Starter</a>
                <a routerLink="dishes/salad" routerLinkActive="active">Salads</a>
                <a routerLink="dishes/dessert" routerLinkActive="active">Desserts</a>
                <a routerLink="dishes/drinks" routerLinkActive="active">Drinks</a>
            </div>
        </div>
    `
})

export class AppNavComponent{

}