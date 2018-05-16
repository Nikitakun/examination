import { NgModule } from '@angular/core';
import { UserSettingsRoutes } from './user-settings.routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkUpModule } from '../mark-up-module/mark-up.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        UserSettingsRoutes,
        MarkUpModule,
        CommonModule
    ],
    declarations: [UserProfileComponent],
    exports: [UserProfileComponent]
})
export class UserSettingsModule { }
