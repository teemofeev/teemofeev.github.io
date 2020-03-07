import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SoftwareStoryComponent } from './software-story/software-story.component';
import { TripsMapComponent } from './trips-map/trips-map.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IntroComponent,
    data: { animation: 'index' }
  },
  { path: 'story', component: SoftwareStoryComponent },
  { path: 'trips', component: TripsMapComponent },
  {
    path: 'projects',
    children: [
      {
        path: ':slug',
        component: ProjectDetailsComponent,
      },
      {
        path: '',
        component: ProjectsComponent,
        data: { animation: 'secondary' }
      }
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    // enableTracing: false,
    // onSameUrlNavigation: 'reload',
    // initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
