import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../observable-data.service';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.css']
})
export class ProjectsMenuComponent implements OnInit {

  spatialProjects: any[] = [];
  // [
  //   { 'name': 'Bio Diversity', 'id': 'Bio Diversity' },
  //   { 'name': 'Carbon', 'id': 'Carbon' },
  //   { 'name': 'Water', 'id': 'Water' },
  //   { 'name': 'Experiential', 'id': 'Experiential' }
  // ];
  temporalProjects: any[] = [];
  // [
  //   { 'name': 'People', 'id': 'People' },
  //   { 'name': 'Houses', 'id': 'Houses' },
  //   { 'name': 'Infrastructure', 'id': 'Infrastructure' },
  //   { 'name': 'Regional Economy', 'id': 'Regional Economy' },
  // ];

  constructor(private ods: ObservableDataService) { }

  ngOnInit() {
    this.ods.getTemporalList().subscribe((data) => {
      console.log('Got temporal Menu results.')
      this.temporalProjects = data;
    });
    this.ods.getSpatialList().subscribe((data) => {
      console.log('Got spatial Menu results.')
      this.spatialProjects = data;
    });
  }

}
