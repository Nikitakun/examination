import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './registration/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarkUpModule } from '../mark-up-module/mark-up.module';

@NgModule({
  imports: [
    CommonModule,
    MarkUpModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    SignUpComponent
  ],
  exports: [
    SignUpComponent
  ]
})
export class RegistrationModule { }
