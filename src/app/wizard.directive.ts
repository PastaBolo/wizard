import { Directive, ContentChild } from '@angular/core'
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router'
import { Steps } from './steps'

@Directive({
  selector: '[wizard]',
  exportAs: 'wizard'
})
export class Wizard {
  @ContentChild(RouterOutlet) set outlet(outlet: RouterOutlet) {
    //TODO: send error if there is no RouterOutlet saying to add one
    //TODO: do not forget to unsubscribe at destroy
    outlet.activateEvents.subscribe(currentInstance => {
      this.currentInstance = currentInstance
      this.currentStepIndex = this.steps.findIndex(
        step => step.path === outlet.activatedRoute.routeConfig.path
      )
    })
  }

  public steps: Steps
  public currentStepIndex: number
  public currentInstance: any

  constructor(private router: Router, private route: ActivatedRoute) {
    this.steps = this.route.routeConfig.children
      .filter(step => step.data && step.data.hasOwnProperty('order'))
      .sort((stepA, stepB) => stepA.data.order - stepB.data.order) as Steps
  }

  previous(): void {
    if (this.currentStepIndex > 0) {
      this.router.navigate([this.steps[this.currentStepIndex - 1].path], { relativeTo: this.route })
    }
  }

  next(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.router.navigate([this.steps[this.currentStepIndex + 1].path], { relativeTo: this.route })
    }
  }
}
