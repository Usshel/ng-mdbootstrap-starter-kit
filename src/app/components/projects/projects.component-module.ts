import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';
import { CardPresentationalComponentModule } from 'src/app/presentational-components/card/card.presentational-component-module';
import { CommonModule } from '@angular/common';
import { ProgressBarDirectiveModule } from 'src/app/directives/progress-bar/progress-bar.directive-module';
import { ProjectCardPresentationalComponentModule } from 'src/app/presentational-components/project-card/project-card.presentational-component-module';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderPresentationalComponentModule,
    CardPresentationalComponentModule,
    ProgressBarDirectiveModule,
    ProjectCardPresentationalComponentModule,
  ],
  declarations: [ProjectsComponent],
  providers: [],
  exports: [ProjectsComponent],
})
export class ProjectsComponentModule {}
