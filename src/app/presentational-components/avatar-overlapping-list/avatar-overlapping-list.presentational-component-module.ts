import { NgModule } from '@angular/core';
import { AvatarOverlappingListPresentationalComponent } from './avatar-overlapping-list.presentational-component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AvatarOverlappingListPresentationalComponent],
  providers: [],
  exports: [AvatarOverlappingListPresentationalComponent],
})
export class AvatarOverlappingListPresentationalComponentModule {}
