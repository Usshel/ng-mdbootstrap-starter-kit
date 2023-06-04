import { NgModule } from '@angular/core';
import { HeaderPresentationalComponent } from './header.presentational-component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [HeaderPresentationalComponent],
  providers: [],
  exports: [HeaderPresentationalComponent],
})
export class HeaderPresentationalComponentModule {}
