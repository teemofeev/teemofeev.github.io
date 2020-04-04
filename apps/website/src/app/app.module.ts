import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  NZ_I18N,
  en_US,
  NzResultModule,
  NzButtonModule,
  NzGridModule,
  NzIconModule,
  NzTagModule,
  NzDrawerModule,
  NzMenuModule,
  NzSpinModule,
  NzDividerModule,
  NzBackTopModule,
  NzTypographyModule,
  NzMessageServiceModule,
} from 'ng-zorro-antd';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroComponent } from './intro/intro.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { WorkTableComponent } from './work-table/work-table.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { DataModule } from '@teemofeev/data';
import { SoftwareStoryComponent } from './software-story/software-story.component';
import { TripsMapComponent } from './trips-map/trips-map.component';
import { httpInterceptorProviders } from './interceptors';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    IntroComponent,
    SocialLinksComponent,
    WorkTableComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    SoftwareStoryComponent,
    TripsMapComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FormsModule,
    HttpClientModule,
    NzResultModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzTagModule,
    NzDrawerModule,
    NzMenuModule,
    NzSpinModule,
    NzDividerModule,
    NzBackTopModule,
    NzTypographyModule,
    NzMessageServiceModule,
    DataModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
