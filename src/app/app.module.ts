import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Wizard } from './wizard.directive'
import { StepOneComponent } from './wizard/steps/step-one.component'
import { StepTwoComponent } from './wizard/steps/step-two.component'
import { StepThreeComponent } from './wizard/steps/step-three.component'
import { WizardComponent } from './wizard/wizard.component'
import { ProgressComponent } from './wizard/progress/progress.component'
import { TitleComponent } from './wizard/title/title.component';
import { StepNavComponent } from './wizard/steps/step-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    Wizard,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    WizardComponent,
    ProgressComponent,
    TitleComponent,
    StepNavComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
