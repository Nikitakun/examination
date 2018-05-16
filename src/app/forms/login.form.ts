import { Form } from './form';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

export class LoginForm extends Form {

    static createForm(): LoginForm {
        const form = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });

        return new LoginForm(form);
    }

    constructor(public form: FormGroup) {
        super();
    }

    public getControl(name: string): AbstractControl {
        return this.form.get(name);
    }

}
