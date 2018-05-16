import { Component } from '@angular/core';
import { SignUpForm } from '../../forms/sign-up.form';
import { SignUpService } from '../../services/sign-up.service';
import { SignUpModel } from '../../models/sign-up.model';

@Component({
    selector: 'sign-up-page',
    templateUrl: 'sign-up.component.html',
    styles: [`
        form-container {
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    `]
})
export class SignUpComponent {

    public form = SignUpForm.createForm();

    constructor(private signUpService: SignUpService) {}

    submit() {
        this.signUpService.sendSignUpData(this.form.form.value as SignUpModel)
            .subscribe(() => { alert('Зарегились, прикинь!'); },
              (error) => { console.log(error); }
              );
    }

}
