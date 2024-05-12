import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card21',
  templateUrl: 'feature-card21.component.html',
  styleUrls: ['feature-card21.component.css'],
})
export class FeatureCard21 {
  @Input()
  heading: string = 'Lorem ipsum'
  @Input()
  subHeading: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  constructor() {}
}
