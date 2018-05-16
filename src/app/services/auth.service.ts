import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

    private userToken: string;

    public getToken(): Observable<string> {
        return of(this.userToken || null);
    }

    public get isLoggedIn(): boolean {
        // temporarily
        return true;
    }

}
