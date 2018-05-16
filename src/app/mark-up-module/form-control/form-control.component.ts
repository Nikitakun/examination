import { Component, Input } from '@angular/core';

@Component({
    selector: 'form-control',
    template: `
        <div class="form-group" [class.has-danger]="error">
            <label class="form-control-label" [for]="controlName" *ngIf="label">{{label}}
            </label>
            <ng-content></ng-content>
            <div class="form-control-feedback" *ngIf="error">
                {{error}}
            </div>
        </div>
    `,
    styleUrls: ['form-control.component.scss']
})
export class FormControlComponent {

    @Input() label: string;

    @Input() controlName: string;

    @Input() error: string;

}
