import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';
import { AvatarOverlappingListPresentationalComponentModule } from 'src/app/presentational-components/avatar-overlapping-list/avatar-overlapping-list.presentational-component-module';
import { CardPresentationalComponentModule } from 'src/app/presentational-components/card/card.presentational-component-module';
import { ProjectCardPresentationalComponentModule } from 'src/app/presentational-components/project-card/project-card.presentational-component-module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    PageHeaderPresentationalComponentModule,
    AvatarOverlappingListPresentationalComponentModule,
    CardPresentationalComponentModule,
    ProjectCardPresentationalComponentModule,
  ],
  declarations: [TeamComponent],
  providers: [],
  exports: [TeamComponent],
})
export class TeamComponentModule {}
