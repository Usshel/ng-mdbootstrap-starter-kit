import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';
import { CardPresentationalComponentModule } from 'src/app/presentational-components/card/card.presentational-component-module';
import { ProgressBarDirectiveModule } from 'src/app/directives/progress-bar/progress-bar.directive-module';
import { CommonModule } from '@angular/common';
import { CheckListItemsDonePipeModule } from '../../pipes/check-list-items-done/check-list-items-done.pipe-module';
import { LengthPipeModule } from '../../pipes/length/length.pipe-module';
import { AvatarOverlappingListPresentationalComponentModule } from 'src/app/presentational-components/avatar-overlapping-list/avatar-overlapping-list.presentational-component-module';
import { DateInSecondsToDateInMsPipeModule } from 'src/app/pipes/date-in-seconds-to-date-in-ms/date-in-seconds-to-date-in-ms.pipe-module';

@NgModule({
  declarations: [TasksComponent],
  providers: [],
  exports: [TasksComponent],
  imports: [
    PageHeaderPresentationalComponentModule,
    CardPresentationalComponentModule,
    ProgressBarDirectiveModule,
    CommonModule,
    CheckListItemsDonePipeModule,
    LengthPipeModule,
    AvatarOverlappingListPresentationalComponentModule,
    DateInSecondsToDateInMsPipeModule,
  ],
})
export class TasksComponentModule {}
