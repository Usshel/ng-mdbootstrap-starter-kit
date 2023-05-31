import { NgModule } from '@angular/core';
import { ImgOverlapListPresentationalComponent } from './img-overlap-list.presentational-component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [ImgOverlapListPresentationalComponent],
  providers: [],
  exports: [ImgOverlapListPresentationalComponent],
})
export class ImgOverlapListPresentationalComponentModule {}
