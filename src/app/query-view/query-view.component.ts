import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../observable-data.service';
import { SortDirection } from '../sort-direction';
import * as moment from 'moment';

@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.css']
})
export class QueryViewComponent implements OnInit {

  queries: any[] = [];

  constructor(private qm: ObservableDataService) { }

  ngOnInit() {
    this.qm.getQueries().subscribe((data) => {
      console.log(data);
      this.queries = [data];
    });
  }


}
