import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';


import * as bhLit from '!raw-loader!../assets/brainhub.svg';
import * as archlinuxLiteral from '!raw-loader!../assets/archlinux.svg';
import * as menuLiteral from '!raw-loader!../assets/menu.svg';

@Component({
  selector: 'teemofeev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'website';
  constructor(
    private readonly nzIconService: NzIconService
  ) {
    this.nzIconService.addIconLiteral('teemofeev:brainhub', bhLit['default']);
    this.nzIconService.addIconLiteral('teemofeev:archlinux', archlinuxLiteral['default']);
    this.nzIconService.addIconLiteral('teemofeev:menu', menuLiteral['default']);
  }
}
