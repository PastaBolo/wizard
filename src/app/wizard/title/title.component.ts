import { Component, Input, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-title',
  template: `
    <ng-container *ngTemplateOutlet="tmpl"></ng-container>
  `,
  styles: []
})
export class TitleComponent {
  @Input() tmpl: TemplateRef<any>
}
