import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
})
export class About {
  raw78sr: string = ' '
  rawcmgg: string = ' '
  rawfx0e: string = ' '
  rawene1: string = ' '
  rawxi0c: string = ' '
  rawbpwy: string = ' '
  raw51mv: string = ' '
  raw3zgd: string = ' '
  rawkekg: string = ' '
  rawrcdb: string = ' '
  raw8thq: string = ' '
  rawekot: string = ' '
  raw6dg8: string = ' '
  rawdxob: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('about - Leading Tech Consulting Services | MrBello IT')
    this.meta.addTags([
      {
        name: 'description',
        content:
          "Boost your business with MrBello IT's expert tech consulting services for digital transformation and efficiency",
      },
      {
        property: 'og:title',
        content: 'about - Leading Tech Consulting Services | MrBello IT',
      },
      {
        property: 'og:description',
        content:
          'Transform your business with MrBello IT! Harness innovative tech solutions to streamline operations and enhance growth.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7cf9f5fc-bb84-4ea9-8dc1-768f3880c655/871ce75f-5f4c-455e-ac35-db789bc8fcc9?org_if_sml=1&force_format=original',
      },
    ])
  }
}
