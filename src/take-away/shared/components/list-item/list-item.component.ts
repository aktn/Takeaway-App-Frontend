import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'list-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['list-item.component.scss'],
    template: `
    <div class="list-item">
        <a>
            <p class="list-item__name">{{ item.name }}</p>
            <p class="list-item__ingredients">
            </p>
        </a>
    </div>
    `

})

export class ListItemComponent{
    @Input()
    item: any;
}