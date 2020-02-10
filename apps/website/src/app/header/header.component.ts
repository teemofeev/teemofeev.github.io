import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'teemofeev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  navigationVisible: Boolean = false;
  isRoot: Boolean = false;
  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => this.isRoot = this.router.isActive('/', true));
  }


  public closeNavigation() {
    this.navigationVisible = false;
  }

  public openNavigation() {
    this.navigationVisible = true;
  }

}
