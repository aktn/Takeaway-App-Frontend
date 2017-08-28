import { Component, Input } from '@angular/core';

@Component({
    selector: 'menu-list',
    styleUrls: ['menu-list.component.scss'],
    template: `
        <div class="list-item">
            <a>
                <p class="list-item__name">{{ menu.name }}</p>
                <p class="list-item__ingredients">
                    <span>{{ menu.ingredients }}</span>
                </p>
            </a>
            <button class="trash" type="button">
                <img src="/img/remove.svg">
            </button>
        </div>
    `
})

export class MenuListComponent{

    @Input()
    menu: any;

    constructor(){
        
    }
}