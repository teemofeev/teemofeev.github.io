import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { isPlatformServer } from '@angular/common';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MdInterceptor implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (isPlatformServer(this.platformId) && req.url.startsWith('assets')) {
      return next.handle(req.clone({
        url: `http://localhost:4000/${req.url}`
      }));
    }

    return next.handle(req);
  }
}
