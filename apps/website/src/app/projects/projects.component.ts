import { Component, OnInit } from '@angular/core';

import { Project, DataService } from '@teemofeev/data';


@Component({
  selector: 'teemofeev-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  public projects: Array<Project> = [];
  constructor(
    private readonly dataService: DataService
  ) { }

  async ngOnInit() {
    this.projects = await this.dataService.getProjects().toPromise();
  }

}
