import { Component, OnInit } from '@angular/core';
import { Project, DataService } from '@teemofeev/data';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'teemofeev-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.less']
})
export class ProjectDetailsComponent implements OnInit {
  public project: Project;
  public loading: Boolean = true;

  constructor(
    private readonly activetedRoute: ActivatedRoute,
    private readonly dataService: DataService,
    private readonly metaService: MetaService
  ) { }

  ngOnInit() {
    this.activetedRoute.paramMap.subscribe(this.loadProject);
  }

  private loadProject = async (paramMap: ParamMap) => {
    const slug = paramMap.get('slug');
    this.project = await this.dataService.getProjectBySlug(slug).toPromise();
    this.metaService.setTitle((this.project?.title || 'Not found') + ' - Projects - teemofeev');
    if (this.project) {
      this.metaService.setKeywords(this.project.stack.map(v => v.tech));
    }
    this.loading = false;
  }

}
