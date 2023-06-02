import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({ selector: '[employeeLink]' })
export class EmployeeLinkDirective {
  @Input() employeeLink!: string;

  constructor(private _router: Router) {}

  @HostListener('click') navigateToEmployee() {
    this._router.navigate(['employee', this.employeeLink]);
  }
}
