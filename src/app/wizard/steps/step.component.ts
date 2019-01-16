import { TemplateRef, ViewChild } from '@angular/core'

export class StepComponent {
  @ViewChild('titleTmpl') titleTmpl: TemplateRef<any>
}
