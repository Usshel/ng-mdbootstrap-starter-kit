import { NgModule } from '@angular/core';
import { AvatarCardPresentationalComponent } from './avatar-card.presentational-component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeLinkDirectiveModule } from 'src/app/directives/employee-link/employee-link.directive-module';
import { PointerDirectiveModule } from 'src/app/directives/pointer/pointer.directive-module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    EmployeeLinkDirectiveModule,
    PointerDirectiveModule,
  ],
  declarations: [AvatarCardPresentationalComponent],
  providers: [],
  exports: [AvatarCardPresentationalComponent],
})
export class AvatarCardPresentationalComponentModule {}
