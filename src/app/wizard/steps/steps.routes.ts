import { Routes } from '@angular/router'

import { StepOneComponent } from './step-one.component'
import { StepTwoComponent } from './step-two.component'
import { StepThreeComponent } from './step-three.component'

export const stepsRoutes: Routes = [
  { path: 'step-one', component: StepOneComponent, data: { order: -1 } },
  { path: 'step-three', component: StepThreeComponent, data: { order: 14 } },
  { path: 'step-two', component: StepTwoComponent, data: { order: 3 } }
  { path: '', pathMatch: 'full', redirectTo: 'step-one' }
]
