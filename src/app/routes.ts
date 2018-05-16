import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-module/login/login.component';
import { SignUpComponent } from './registration-module/registration/sign-up.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { MainGuard } from './services/guards/main-guard';


// export const getSignUpUrl = () => ['/sign-up'];

// export const getLoginUrl = () => ['/login'];

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'main',
        component: AppLayoutComponent,
        children: [
           /* {
                path: 'profile',
                component: UserProfileComponent
            }*/
           {
                path: '',
                loadChildren: './user-settings-module/user-settings.module#UserSettingsModule'
            }

        ],
        canActivate: [MainGuard],
        canActivateChild: [MainGuard]
    }

];

export default RouterModule.forRoot(ROUTES);
