import { Component } from '@angular/core';

@Component({
    selector: 'form-container',
    template: `
        <div class="form-container">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['form-container.component.scss']
})
export class FormContainerComponent { }
