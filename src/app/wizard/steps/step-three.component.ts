import { Component } from '@angular/core'
import { StepComponent } from './step.component'

@Component({
  selector: 'app-step-three',
  template: `
    <div>step-three works!</div>
    <app-step-nav></app-step-nav>
    <ng-template #titleTmpl><h3>Step Three</h3></ng-template>
  `
})
export class StepThreeComponent extends StepComponent {}
