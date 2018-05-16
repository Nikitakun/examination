import { Form } from './form';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpForm } from './sign-up.form';

export class UserProfileForm extends Form {

    static createForm(): UserProfileForm {
        const form = new FormGroup({
            userName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            passwordConfirm: new FormControl('', [Validators.required])
        });

        return new UserProfileForm(form);
    }

    constructor(public form: FormGroup) {
        super();
    }

    public getControl(name: string): AbstractControl {
        return this.form.get(name);
    }

}
