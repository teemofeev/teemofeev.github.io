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
  NzSpinModule
} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image'; // <-- include scrollPreset

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
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LazyLoadImageModule.forRoot({}),
    NzResultModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzTagModule,
    NzDrawerModule,
    NzMenuModule,
    NzSpinModule,
    DataModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
