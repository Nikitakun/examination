import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { AuthService } from '../auth.service';

@Injectable()
export class MainGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!route.firstChild) {
            this.router.navigate(['main/profile']);
        }
        return this.authService.isLoggedIn;
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true;
    }

}
