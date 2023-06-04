import { NgModule } from '@angular/core';
import { AvatarOverlappingListPresentationalComponent } from './avatar-overlapping-list.presentational-component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PointerDirectiveModule } from 'src/app/directives/pointer/pointer.directive-module';
import { EmployeeLinkDirectiveModule } from 'src/app/directives/employee-link/employee-link.directive-module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    PointerDirectiveModule,
    EmployeeLinkDirectiveModule,
  ],
  declarations: [AvatarOverlappingListPresentationalComponent],
  providers: [],
  exports: [AvatarOverlappingListPresentationalComponent],
})
export class AvatarOverlappingListPresentationalComponentModule {}
