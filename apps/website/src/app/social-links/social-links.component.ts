import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'teemofeev-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.less']
})
export class SocialLinksComponent {
  private readonly _email = 'timadevelop@gmail.com';
  public mailHref = null;
  constructor(
    private nzMsg: NzMessageService
  ) { }

  emailClick(event: Event) {
    if (this.mailHref) {
      return;
    }
    this.mailHref = `mailto:${this._email}`;
    this.nzMsg.success(this._email, {
      nzDuration: 3000,
      nzPauseOnHover: true,
      nzAnimate: true
    });
  }
}
