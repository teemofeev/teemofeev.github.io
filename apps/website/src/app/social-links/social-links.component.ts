import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { environment } from '../../environments/environment';

const DEFAULT_EMAIL_ME_TEXT = 'Better email me';

@Component({
  selector: 'teemofeev-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.less']
})
export class SocialLinksComponent {
  private readonly _place = 'Eastern Europe';
  public mailHref = null;

  public emailMeText = DEFAULT_EMAIL_ME_TEXT;

  constructor(
    private nzMsg: NzMessageService
  ) { }

  emailClick(event: Event) {
    if (this.mailHref) {
      return;
    }
    this.mailHref = `mailto:${environment.email}`;
    this.showMsg(`Check your email app. Here's my email: ${environment.email}`);
  }

  showPlace() {
    this.showMsg(`I live in ${this._place}. Email me to arrange a meeting.`);
  }

  showMsg(text: string) {
    this.nzMsg.success(text, {
      nzDuration: 10000,
      nzPauseOnHover: true,
      nzAnimate: true
    });
  }
}
