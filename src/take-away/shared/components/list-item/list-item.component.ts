import { ActivatedRoute } from '@angular/router';
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
    selector: 'list-item',
    
    styleUrls: ['list-item.component.scss'],
    template: `
    <div class="list-item">
        <a [routerLink]="getRouteId(item)">
            <p class="list-item__name">{{ item.name }}</p>
            <p class="list-item__ingredients">
                <span *ngIf="item.ingredients; else restaurants;">{{ item.ingredients | join }}</span>
                <ng-template #restaurants>
                    <span>{{ item.address }}</span>
                </ng-template>
            </p>
        </a>
        <div class="list-item__delete" *ngIf="toggled">
            <p>Delete?</p>
            <button type="button" class="confirm" (click)="removeItem()">Confirm</button>
            <button type="button" class="cancel" (click)="toggle()">Cancel</button>
        </div>
        <button class="trash" type="button" (click)="toggle()">
            <img src="/img/remove.svg" />
        </button>
    </div>
    `

})

export class ListItemComponent{
    toggled = false;

    @Input()
    item: any;

    @Output()
    remove = new EventEmitter<any>();

    constructor(
        private route: ActivatedRoute
    ){}

    toggle(){
        this.toggled = !this.toggled;
    }

    removeItem(){
        this.remove.emit(this.item);
    }

    getRouteId(item: any){
        return[`../${ item.ingredients ? 'dishes' : 'restaurants' }`,item.$key];
    }
}