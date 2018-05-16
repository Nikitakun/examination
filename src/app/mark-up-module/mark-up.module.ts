import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormControlComponent } from './form-control/form-control.component';
import { MainContentContainerComponent } from './main-content-container/main-content-container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormContainerComponent,
    FormControlComponent,
    MainContentContainerComponent
  ],
  exports: [
    FormContainerComponent,
    FormControlComponent,
    MainContentContainerComponent
  ]
})
export class MarkUpModule { }
