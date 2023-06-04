import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({ selector: '[teamLink]' })
export class TeamLinkDirective {
  @Input() teamLink!: string;

  constructor(private _router: Router) {}

  @HostListener('click') navigateToTeam() {
    this._router.navigate(['teams', this.teamLink!]);
  }
}
