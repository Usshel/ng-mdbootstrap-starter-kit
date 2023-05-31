import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { PageHeaderPresentationalComponentModule } from 'src/app/presentational-components/page-header/page-header.presentational-component-module';

@NgModule({
  imports: [PageHeaderPresentationalComponentModule],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
