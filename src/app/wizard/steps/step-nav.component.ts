import { Component } from '@angular/core'
import { Wizard } from 'src/app/wizard.directive'

@Component({
  selector: 'app-step-nav',
  template: `
    <button (click)="wizard.previous()">previous</button>
    <button (click)="wizard.next()">next</button>
  `
})
export class StepNavComponent {
  constructor(public wizard: Wizard) {}
}
