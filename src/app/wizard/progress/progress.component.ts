import { Component, Input } from '@angular/core'
import { Step } from 'src/app/wizard.directive'

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() steps: Step[]
}
