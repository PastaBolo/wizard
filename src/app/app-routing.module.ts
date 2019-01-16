import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { stepsRoutes } from './wizard/steps/steps.routes'
import { WizardComponent } from './wizard/wizard.component'

const routes: Routes = [
  { path: 'wizard', component: WizardComponent, children: stepsRoutes },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
