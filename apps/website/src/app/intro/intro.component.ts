import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'teemofeev-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit, OnDestroy {

  private timeout?: any;
  constructor(
    private readonly renderer: Renderer2,
    private readonly metaService: MetaService
  ) { }

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
