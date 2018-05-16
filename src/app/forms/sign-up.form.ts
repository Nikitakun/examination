import { Form } from './form';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

export class SignUpForm extends Form {

    static createForm(): SignUpForm {
        const form = new FormGroup({
            userName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            passwordConfirm: new FormControl('', [Validators.required])
        });

        return new SignUpForm(form);
    }

    constructor(public form: FormGroup) {
        super();
    }

    public getControl(name: string): AbstractControl {
        return this.form.get(name);
    }

}
