import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';
import { AvatarCardPresentationalComponentModule } from 'src/app/presentational-components/avatar-card/avatar-card.presentational-component-module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    PageHeaderPresentationalComponentModule,
    AvatarCardPresentationalComponentModule,
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
