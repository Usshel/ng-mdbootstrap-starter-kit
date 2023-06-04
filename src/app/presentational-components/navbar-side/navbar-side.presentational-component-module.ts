import { NgModule } from '@angular/core';
import { NavbarSidePresentationalComponent } from './navbar-side.presentational-component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [NavbarSidePresentationalComponent],
  providers: [],
  exports: [NavbarSidePresentationalComponent],
})
export class NavbarSidePresentationalComponentModule {}
