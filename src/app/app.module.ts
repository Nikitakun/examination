import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import routes from './routes';
import { MarkUpModule } from './mark-up-module/mark-up.module';
import { LoginModule } from './login-module/login.module';
import { RegistrationModule } from './registration-module/registration.module';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { MessageBusService } from './services/message-bus.service';
import { SignUpService } from './services/sign-up.service';
import { MainGuard } from './services/guards/main-guard';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    routes,
    MarkUpModule,
    LoginModule,
    RegistrationModule,
    LayoutModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ApiService,
    AuthService,
    LoginService,
    MessageBusService,
    SignUpService,
    MainGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
