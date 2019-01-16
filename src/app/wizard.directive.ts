import { Directive, AfterContentInit, ContentChild, Input } from '@angular/core'
import { RouterOutlet, Router, Routes } from '@angular/router'

export interface Step {
  path: string
}

@Directive({
  selector: '[wizard]',
  exportAs: 'wizard'
})
export class Wizard implements AfterContentInit {
  @ContentChild(RouterOutlet) outlet: RouterOutlet

  @Input('wizard') set routes(routes: Routes) {
    this.steps = routes
      .filter(step => step.data && step.data.hasOwnProperty('order'))
      .sort((stepA, stepB) => stepA.data.order - stepB.data.order)
      .map<Step>(step => ({ path: step.path }))
  }

  public steps: Step[]
  public currentStepIndex: number
  public currentInstance: any

  constructor(private router: Router) {}

  ngAfterContentInit(): void {
    //TODO: do not forget to unsubscribe
    this.outlet.activateEvents.subscribe(currentInstance => {
      this.currentInstance = currentInstance
      this.currentStepIndex = this.steps.findIndex(
        step => step.path === this.outlet.activatedRoute.routeConfig.path
      )
    })
  }

  previous(): void {
    if (this.currentStepIndex > 0) {
      this.router.navigate([this.steps[this.currentStepIndex - 1].path])
    }
  }

  next(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.router.navigate([this.steps[this.currentStepIndex + 1].path])
    }
  }
}
