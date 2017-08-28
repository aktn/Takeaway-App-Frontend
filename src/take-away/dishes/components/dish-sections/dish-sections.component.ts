import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'dish-sections',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['dish-sections.component.scss'],
    template: `
        <div class="dish-sections">
        </div>
    `
})

export class DishSectionComponent{

}