import { Injectable } from '@angular/core';
import { SignUpModel } from '../models/sign-up.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignUpService {

    constructor(private apiService: ApiService) {}

    sendSignUpData(model: SignUpModel): Observable<SignUpModel> {
        return this.apiService.post('account/register', model);
    }

}
