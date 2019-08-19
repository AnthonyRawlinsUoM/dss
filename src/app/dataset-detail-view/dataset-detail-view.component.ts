import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableDataService } from '../observable-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SessionLogService } from '../session-log.service';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-dataset-detail-view',
  templateUrl: './dataset-detail-view.component.html',
  styleUrls: ['./dataset-detail-view.component.css']
})
export class DatasetDetailViewComponent implements OnInit {

  @ViewChild('pcard', { static: false }) pcard: ProjectCardComponent;

  frappenator_project;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ods: ObservableDataService,
    private logger: SessionLogService) { }

  ngOnInit() {
    // this.ods.getProjectDetails()
    this.route.paramMap.subscribe(params => {
      this.logger.log('ID is: ' + params.get('id'));
      let r = params.get('id');

      this.frappenator_project = params.get('id');

      console.log(this.frappenator_project);
      this.logger.log('Frappenator Project is now: ' + this.frappenator_project);
    });
  }

}
