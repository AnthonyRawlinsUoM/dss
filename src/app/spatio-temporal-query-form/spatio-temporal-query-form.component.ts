import { Component, OnInit } from '@angular/core';
import { SpatioTemporalQuery } from '../spatio-temporal-query';
import { ObservableDataService } from '../observable-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-spatio-temporal-query-form',
  templateUrl: './spatio-temporal-query-form.component.html',
  styleUrls: ['./spatio-temporal-query-form.component.css']
})
export class SpatioTemporalQueryFormComponent implements OnInit {

  query: SpatioTemporalQuery;
  model: string;
  start: string;
  finish: string;
  geo_json: any;

  constructor(private qs: ObservableDataService) { }

  ngOnInit() {
    this.start = moment().format();
    this.finish = moment().subtract(7, 'days').format();
  }

  validate_submit() {

    //Debugging code...
    this.geo_json = {};

    this.model = 'DFMC';

    this.query = new SpatioTemporalQuery(
      this.start,
      this.finish,
      this.geo_json,
      this.model
    );

    this.qs.submitQuery(this.query);
  }



}
