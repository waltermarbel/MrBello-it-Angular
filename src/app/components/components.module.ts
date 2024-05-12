import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Question1 } from './question1/question1.component'
import { FeatureCard } from './feature-card/feature-card.component'
import { FeatureCard21 } from './feature-card21/feature-card21.component'

@NgModule({
  declarations: [Question1, FeatureCard, FeatureCard21],
  imports: [CommonModule, RouterModule],
  exports: [Question1, FeatureCard, FeatureCard21],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
