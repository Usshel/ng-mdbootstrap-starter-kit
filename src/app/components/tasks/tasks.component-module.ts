import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';
import { CardPresentationalComponentModule } from 'src/app/presentational-components/card/card.presentational-component-module';
import { ProgressBarDirectiveModule } from 'src/app/directives/progress-bar/progress-bar.directive-module';

@NgModule({
  imports: [
    PageHeaderPresentationalComponentModule,
    CardPresentationalComponentModule,
    ProgressBarDirectiveModule,
  ],
  declarations: [TasksComponent],
  providers: [],
  exports: [TasksComponent],
})
export class TasksComponentModule {}
