import { Component } from '@angular/core';
import { LoginForm } from '../../forms/login.form';
import { LoginService } from '../../services/login.service';
import { LoginModel } from '../../models/login.model';

@Component({
    selector: 'login-page',
    templateUrl: 'login.component.html',
    styles: [`
        form-container {
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    `]
})
export class LoginComponent {

    public form = LoginForm.createForm();

    public get signUpUrl() {
      return ['/sign-up'];
    }

    constructor(private loginService: LoginService) {}

    submitLogin() {
        this.loginService.login(this.form.form.value as LoginModel)
            .subscribe(() => { alert('ЗАЛОГИНИЛИСЬ, ПРИКИНЬ!'); } );
    }

}
