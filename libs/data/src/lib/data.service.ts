import { Injectable } from '@angular/core';
import { Project } from './models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projects: Array<Project> = [
    {
      title: 'Kos',
      slug: 'kos',
      role: 'Developer',
      image: 'assets/mountains.svg',
      description: `
      Kos lorem one w. Kost is thikjijisb iksjofs.
      Kos lorem one w. Kost is thikjijisb iksjofs.
      Kos lorem one w. Kost is thikjijisb iksjofs.
      Kos lorem one w. Kost is thikjijisb iksjofs.
      Kos lorem one w. Kost is thikjijisb iksjofs.
      Kos lorem one w. Kost is thikjijisb iksjofs.
      Kos lorem one w. Kost is thikjijisb iksjofs.
      Kos lorem one w. Kost is thikjijisb iksjofs.
      `,
      icon: 'assets/logos/mobile.svg',
      stack: [
        { tech: 'React', color: '#FE9E76' },
        { tech: 'Node.js', color: '#00CF91' },
        { tech: 'Angular', color: '#1771F1', icon: "fire" },
      ],
      links: [
        { href: 'https://linkedin.com', color: '#1772F1', text: 'Website' },
        { href: 'https://linkedin.com', color: '#1772F1', text: 'LinkedIn' },
        { href: 'https://facebook.com', color: '#1772F1', text: 'Facebook' },
      ]
    },
    {
      title: 'Some',
      slug: 'some1',
      role: 'Developer',
      image: 'assets/radiant.svg',
      description: '',
      icon: 'assets/logos/apps.svg'
    },
    {
      title: 'Leather',
      slug: 'other',
      role: 'Code',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Mountains-1412683.svg',
      description: '',
      icon: 'assets/logos/exp_design.svg'
    },
    {
      title: 'Lok',
      slug: 'lok',
      role: 'Co-code',
      image: 'assets/squares.svg',
      description: '',
      icon: 'assets/logos/confirm.svg'
    }
  ];

  constructor() { }


  public getProjectBySlug(slug): Observable<Project | null> {
    return of(this.projects.find(v => v.slug === slug));
  }

  public getProjects(): Observable<Array<Project>> {
    return of(this.projects);
  }
}
