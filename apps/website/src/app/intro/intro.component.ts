import { Component, OnInit, Renderer2, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from '../services/meta.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'teemofeev-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit, OnDestroy {

  private timeout?: any;
  public isBrowser: Boolean = false;

  constructor(
    private readonly renderer: Renderer2,
    private readonly metaService: MetaService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.metaService.setTitle('Vlad Timofeev - teemofeev');
  }

  ngOnDestroy(): void {
  }

  private clearTimeouts() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  flyAway(event): void {
    this.clearTimeouts();
    this.renderer.addClass(event.target, 'fly-away');
    const timeoutFn = () => this.renderer.removeClass(event.target, 'fly-away');
    this.timeout = setTimeout(timeoutFn, 2000);
  }

}
