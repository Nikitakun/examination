import { Component } from '@angular/core';
import { UserProfileForm } from '../../forms/user-profile.form';

@Component({
    selector: 'user-profile',
    template: `
        <main-content-container pageHeading="Профиль">
            <div class="form-container align-items-sm-center">
                <form [formGroup]="form.form">
                    <form-control>
                        <input class="form-control" type="text" placeholder="Имя" name="userName" 
                               formControlName="userName">
                    </form-control>
                    <form-control>
                        <input class="form-control" type="date" placeholder="Дата рождения" name="email"
                               formControlName="email">
                    </form-control>
                    <form-control>
                        <input class="form-control" type="text" placeholder="IQ" name="password" 
                               formControlName="password">
                    </form-control>
                    <form-control>
                        <input class="form-control" type="text" placeholder="ICQ" name="passwordConfirm"
                               formControlName="passwordConfirm">
                    </form-control>
                </form>
            </div>
        </main-content-container>
    `
})
export class UserProfileComponent {

    public form = UserProfileForm.createForm();

}
