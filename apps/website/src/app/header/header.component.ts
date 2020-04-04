import { Component, OnInit, Renderer2, NgZone, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'teemofeev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  navigationVisible: Boolean = false;
  isRoot: Boolean = false;

  // Instead of holding a boolean value for whether the spinner
  // should show or not, we store a reference to the spinner element,
  // see template snippet below this script
  @ViewChild('loadingElement')
  loadingElement: ElementRef

  // Shows and hides the loading spinner during RouterEvent changes
  private _navigationInterceptor = (event: RouterEvent): void => {
    if (event instanceof NavigationStart) {
      this._runLoadingAnimation();
    }
    if (event instanceof NavigationEnd) {
      this._stopLoadingAnimation()
    }
    // Set loading state to false in both of the below events to
    // hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this._stopLoadingAnimation()
    }
    if (event instanceof NavigationError) {
      this._stopLoadingAnimation()
    }
  }

  private _runLoadingAnimation = (): void => {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.addClass(
        this.loadingElement.nativeElement,
        'loading',
      );
    })
  }

  private _stopLoadingAnimation = (): void => {
    // We wanna run this function outside of Angular's zone to
    // bypass change detection,
    this.ngZone.runOutsideAngular(() => {
      // For simplicity we are going to turn opacity on / off
      // you could add/remove a class for more advanced styling
      // and enter/leave animation of the spinner
      this.renderer.removeClass(
        this.loadingElement.nativeElement,
        'loading',
      );
    })
  }
  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly router: Router,
    private readonly ngZone: NgZone,
    private readonly renderer: Renderer2) {
    router.events.subscribe(this._navigationInterceptor)
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(e => this.isRoot = this.router.isActive('/', true));
  }


  public closeNavigation() {
    this.navigationVisible = false;
  }

  public openNavigation() {
    this.navigationVisible = true;
  }

}
