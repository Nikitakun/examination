import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';

export const USER_SETTINGS_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/main/profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: UserProfileComponent
    }
];

@NgModule({
    imports : [RouterModule.forChild( USER_SETTINGS_ROUTES)],
    exports : [RouterModule],
})
export class UserSettingsRoutes { }
