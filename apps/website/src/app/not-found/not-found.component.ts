import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'teemofeev-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent implements OnInit {

  @Input() title?: string | TemplateRef<any> = 'Sorry, the page you visited does not exist.';
  @Input() extra?: string | TemplateRef<any>;

  constructor(
    private readonly metaService: MetaService
  ) { }

  ngOnInit() {
    this.metaService.setTitle(this.title + ' - teemofeev');
  }

}
