import { Component, Input } from '@angular/core'
import { Routes } from '@angular/router'

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() steps: Routes
}
