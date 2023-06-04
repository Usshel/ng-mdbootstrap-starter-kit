import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';
import { CardPresentationalComponentModule } from 'src/app/presentational-components/card/card.presentational-component-module';
import { LengthPipeModule } from 'src/app/pipes/length/length.pipe-module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarCardPresentationalComponentModule } from 'src/app/presentational-components/avatar-card/avatar-card.presentational-component-module';
import { EmployeeLinkDirectiveModule } from 'src/app/directives/employee-link/employee-link.directive-module';
import { PointerDirectiveModule } from 'src/app/directives/pointer/pointer.directive-module';
import { TeamLinkDirectiveModule } from 'src/app/directives/team-link/team-link.directive-module';

@NgModule({
  imports: [
    PageHeaderPresentationalComponentModule,
    CardPresentationalComponentModule,
    LengthPipeModule,
    CommonModule,
    BrowserModule,
    AvatarCardPresentationalComponentModule,
    EmployeeLinkDirectiveModule,
    PointerDirectiveModule,
    TeamLinkDirectiveModule,
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent],
})
export class HomeComponentModule {}
