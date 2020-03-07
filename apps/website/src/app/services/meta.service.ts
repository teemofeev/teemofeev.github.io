import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(
    private readonly meta: Meta,
    private readonly title: Title
  ) {
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({property: 'og:locale', content: 'en_US'});
    this.meta.addTag({ name: 'twitter:site', content: '@teemofeev' });
  }

  setTitle(title: string) {
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.addTag({ name: 'twitter:title', content: title });
    // this.meta.updateTag({ property: 'og:url',  });
    return this.title.setTitle(title);
  }

  setKeywords(keywords: Array<string>) {
    this.meta.updateTag({ name: 'keywords', content: keywords.join(',') });

  }

  addTag(tag: string) {
    this.meta.addTag({ name: 'twitter:description', content: 'Learn frontend web development...' });
    this.meta.addTag({ name: 'og:description', content: 'Learn frontend web development...' });
  }

  setImage(imageUrl:string, imageType?: string) {
    this.meta.addTag({ name: 'twitter:card', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl, itemprop: 'image' });
    this.meta.updateTag({ property: 'og:image:url', content: imageUrl, itemprop: 'image' });
    this.meta.updateTag({ property: 'og:image:type', content: imageType || 'image/png' });
  }
}
