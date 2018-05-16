import { Component, Input } from '@angular/core';

@Component({
    selector: 'main-content-container',
    template: `
        <h1 class="heading text-left" *ngIf="pageHeading">{{pageHeading}}</h1>
        <ng-content></ng-content>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
            min-height: 100%;
        }
    `]
})
export class MainContentContainerComponent {

    @Input() pageHeading: string;

}
