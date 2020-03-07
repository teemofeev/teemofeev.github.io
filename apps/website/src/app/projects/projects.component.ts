import { Component, OnInit } from '@angular/core';

import { Project, DataService } from '@teemofeev/data';
import { MetaService } from '../services/meta.service';


@Component({
  selector: 'teemofeev-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  public projects: Array<Project> = [];
  constructor(
    private readonly dataService: DataService,
    private readonly metaService: MetaService
  ) { }

  async ngOnInit() {
    this.metaService.setTitle(`Projects I'm involved in - teemofeev`);
    this.projects = await this.dataService.getProjects().toPromise();
  }

}
