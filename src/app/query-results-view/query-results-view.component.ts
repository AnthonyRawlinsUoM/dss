import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../observable-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-query-results-view',
  templateUrl: './query-results-view.component.html',
  styleUrls: ['./query-results-view.component.css']
})
export class QueryResultsViewComponent implements OnInit {

  results: any[] = []
  partial_results: any[] = [];

  constructor(private qm: ObservableDataService) { }

  ngOnInit() {
    this.qm.getResults().subscribe((data) => {
      console.log(data);
      this.results = [data];
    });

    this.qm.getPartialResults().subscribe((data) => {
      console.log(data);
      this.partial_results = [data];
    });
  }

}
