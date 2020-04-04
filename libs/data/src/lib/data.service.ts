import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './models';
import { of, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projects: Array<Project> = [];

  constructor(
    private readonly http: HttpClient
  ) { }

  public getProjectBySlug(slug): Observable<Project | null> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.slug === slug))
    )
  }

  public getProjects(): Observable<Array<Project>> {
    if (this.projects?.length > 0) {
      return of(this.projects);
    }

    return this.http.get<Array<Project>>('assets/texts/projects/index.json')
      .pipe(
        tap(v => this.projects = v)
      );
  }
}
