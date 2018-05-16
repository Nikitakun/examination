import { AbstractControl, FormGroup } from '@angular/forms';

export abstract class Form {

    public form: FormGroup;

    public abstract getControl(name: string): AbstractControl;

}
