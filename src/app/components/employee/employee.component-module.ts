import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { CommonModule } from '@angular/common';
import { AvatarCardPresentationalComponentModule } from 'src/app/presentational-components/avatar-card/avatar-card.presentational-component-module';
import { CardPresentationalComponentModule } from 'src/app/presentational-components/card/card.presentational-component-module';
import { LengthPipeModule } from 'src/app/pipes/length/length.pipe-module';
import { AvatarOverlappingListPresentationalComponentModule } from 'src/app/presentational-components/avatar-overlapping-list/avatar-overlapping-list.presentational-component-module';
import { TeamLinkDirectiveModule } from 'src/app/directives/team-link/team-link.directive-module';
import { PointerDirectiveModule } from 'src/app/directives/pointer/pointer.directive-module';
import { CheckListItemsDonePipeModule } from '../../pipes/check-list-items-done/check-list-items-done.pipe-module';
import { FromCurrentDateToDatePipeModule } from 'src/app/pipes/from-current-date-to-date/from-current-date-to-date.pipe-module';
import { ProjectCardPresentationalComponentModule } from 'src/app/presentational-components/project-card/project-card.presentational-component-module';

@NgModule({
  declarations: [EmployeeComponent],
  providers: [],
  exports: [EmployeeComponent],
  imports: [
    CommonModule,
    AvatarCardPresentationalComponentModule,
    CardPresentationalComponentModule,
    LengthPipeModule,
    AvatarOverlappingListPresentationalComponentModule,
    TeamLinkDirectiveModule,
    PointerDirectiveModule,
    CheckListItemsDonePipeModule,
    FromCurrentDateToDatePipeModule,
    ProjectCardPresentationalComponentModule,
  ],
})
export class EmployeeComponentModule {}
