import { Component } from '@angular/core'
import { trigger, transition, group, query, style, animate } from '@angular/animations'

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  animations: [
    trigger('slide', [
      transition(':increment', [
        style({ position: 'relative' }),
        query(':enter, :leave', [style({ position: 'absolute' })]),
        query(':leave', style({ left: 0 })),
        query(':enter', style({ left: '100%' })),
        group([
          query(':leave', animate('350ms ease-out', style({ left: '-100%' }))),
          query(':enter', animate('350ms ease-out', style({ left: 0 })))
        ])
      ]),
      transition(':decrement', [
        style({ position: 'relative' }),
        query(':enter, :leave', [style({ position: 'absolute' })]),
        query(':leave', style({ left: 0 })),
        query(':enter', style({ left: '-100%' })),
        group([
          query(':leave', animate('350ms ease-out', style({ left: '100%' }))),
          query(':enter', animate('350ms ease-out', style({ left: 0 })))
        ])
      ])
    ])
  ]
})
export class WizardComponent {}
