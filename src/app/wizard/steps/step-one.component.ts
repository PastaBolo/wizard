import { Component } from '@angular/core'
import { StepComponent } from './step.component'

@Component({
  selector: 'app-step-one',
  template: `
    <div>step-one works!</div>
    <ng-template #titleTmpl><h3>Step One</h3></ng-template>
  `
})
export class StepOneComponent extends StepComponent {}
