import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { NzIconService, NzConfigService } from 'ng-zorro-antd';


import * as bhLit from '!raw-loader!../assets/logos/brainhub.svg';
import * as archlinuxLiteral from '!raw-loader!../assets/logos/archlinux.svg';
import * as menuLiteral from '!raw-loader!../assets/menu.svg';

@Component({
  selector: 'teemofeev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('indicatorTemplate', { static: false }) indicatorTemplate: TemplateRef<void>;
  title = 'website';
  constructor(
    private readonly nzIconService: NzIconService,
    private readonly nzConfig: NzConfigService
  ) {
    this.nzIconService.addIconLiteral('teemofeev:brainhub', bhLit['default']);
    this.nzIconService.addIconLiteral('teemofeev:archlinux', archlinuxLiteral['default']);
    this.nzIconService.addIconLiteral('teemofeev:menu', menuLiteral['default']);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.nzConfig.set('spin', {
      nzIndicator: this.indicatorTemplate
    })
  }
}
