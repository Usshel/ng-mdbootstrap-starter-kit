import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';
import { AvatarCardPresentationalComponentModule } from 'src/app/presentational-components/avatar-card/avatar-card.presentational-component-module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeLinkDirectiveModule } from 'src/app/directives/employee-link/employee-link.directive-module';
import { PointerDirectiveModule } from 'src/app/directives/pointer/pointer.directive-module';
import { CardPresentationalComponentModule } from 'src/app/presentational-components/card/card.presentational-component-module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    PageHeaderPresentationalComponentModule,
    AvatarCardPresentationalComponentModule,
    EmployeeLinkDirectiveModule,
    PointerDirectiveModule,
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
