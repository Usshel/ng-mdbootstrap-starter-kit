import { NgModule } from '@angular/core';
import { AvatarCardPresentationalComponent } from './avatar-card.presentational-component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AvatarCardPresentationalComponent],
  providers: [],
  exports: [AvatarCardPresentationalComponent],
})
export class AvatarCardPresentationalComponentModule {}
