import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';
import { CardPresentationalComponentModule } from 'src/app/presentational-components/card/card.presentational-component-module';
import { CommonModule } from '@angular/common';
import { LengthPipeModule } from 'src/app/pipes/length/length.pipe-module';

@NgModule({
  declarations: [TeamsComponent],
  providers: [],
  exports: [TeamsComponent],
  imports: [
    CommonModule,
    PageHeaderPresentationalComponentModule,
    CardPresentationalComponentModule,
    LengthPipeModule,
  ],
})
export class TeamsComponentModule {}
