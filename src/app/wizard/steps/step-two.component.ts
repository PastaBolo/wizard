import { Component } from '@angular/core'
import { StepComponent } from './step.component'

@Component({
  selector: 'app-step-two',
  template: `
    <div>step-two works!</div>
    <app-step-nav></app-step-nav>
    <ng-template #titleTmpl><h3>Step Two</h3></ng-template>
  `
})
export class StepTwoComponent extends StepComponent {}
