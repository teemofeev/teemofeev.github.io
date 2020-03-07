import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'teemofeev-trips-map',
  templateUrl: './trips-map.component.html',
  styleUrls: ['./trips-map.component.less']
})
export class TripsMapComponent implements OnInit {

  constructor(
    private readonly metaService: MetaService
  ) { }

  ngOnInit(): void {
    this.metaService.setTitle('Trips map - teemofeev');
  }

}
