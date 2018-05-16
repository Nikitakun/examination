import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoginModel } from '../models/login.model';

@Injectable()
export class MessageBusService {

     public onLogin = new Subject<LoginModel>();

     public onUpdateToken = new Subject<string>();

     public sendLogin(loginModel: LoginModel) {
         this.sendUpdateToken(loginModel.token);
         this.onLogin.next(loginModel);
     }

     public sendUpdateToken(token: string) {
         this.onUpdateToken.next(token);
     }

}
