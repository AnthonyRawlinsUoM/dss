import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableDataService } from '../observable-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SessionLogService } from '../session-log.service';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { FrappeProject } from '../FrappeProject';

@Component({
  selector: 'app-frappenator-view',
  templateUrl: './frappenator-view.component.html',
  styleUrls: ['./frappenator-view.component.css']
})
export class FrappenatorViewComponent implements OnInit {

  @ViewChild('pcard', { static: false }) pcard: ProjectCardComponent;

  frappenator_project_name;
  frappe_project: FrappeProject;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ods: ObservableDataService,
    private logger: SessionLogService) { }

  ngOnInit() {
    // this.ods.getProjectDetails()
    this.route.paramMap.subscribe(params => {
      this.logger.log('ID is: ' + params.get('frappe'));
      let r = params.get('frappe');

      this.frappenator_project_name = params.get('frappe');

      console.log(this.frappenator_project_name);
      this.logger.log('Frappenator Project is now: ' + this.frappenator_project_name);

      this.ods.getFrappeProject(this.frappenator_project_name).subscribe((data) => {
        console.log(data);
        this.frappe_project = data;
      });

    });
  }

}

