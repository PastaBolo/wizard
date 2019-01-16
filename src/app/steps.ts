import { Route, Data } from '@angular/router'
import { Type } from '@angular/core'

export interface WizardRoute extends Route {
  path: string
  component: Type<any>
  children: Steps
}

//TODO: Forcer l'existance d'au moins une Step
export type Steps = Step[]

export interface Step extends Route {
  data: StepData
}

export interface StepData extends Data {
  order: number
}
