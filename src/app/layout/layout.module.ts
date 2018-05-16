import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppHeaderComponent,
    AppLayoutComponent,
    AppSidebarComponent
  ],
  exports: [
    AppHeaderComponent,
    AppLayoutComponent,
    AppSidebarComponent
  ]
})
export class LayoutModule { }
