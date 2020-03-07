import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'teemofeev-software-story',
  templateUrl: './software-story.component.html',
  styleUrls: ['./software-story.component.less']
})
export class SoftwareStoryComponent implements OnInit {

  constructor(
    private readonly metaService: MetaService
  ) { }

  ngOnInit() {
    this.metaService.setTitle('My story as a software engineer - teemofeev');
  }

}
