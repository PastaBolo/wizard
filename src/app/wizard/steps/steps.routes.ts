import { Routes } from '@angular/router'

import { StepOneComponent } from './step-one.component'
import { StepTwoComponent } from './step-two.component'
import { StepThreeComponent } from './step-three.component'
import { Steps } from '../../steps'

const steps: Steps = [
  { path: 'step-one', component: StepOneComponent, data: { order: -1 } },
  { path: 'step-three', component: StepThreeComponent, data: { order: 14 } },
  { path: 'step-two', component: StepTwoComponent, data: { order: 3 } }
]

export const stepsRoutes: Routes = [
  ...steps,
  { path: '', pathMatch: 'full', redirectTo: 'step-one' }
]
