import { Component, ViewChild, OnInit } from '@angular/core';
import { RawJsonViewComponent } from '../raw-json-view/raw-json-view.component';
import { ObservableDataService } from '../observable-data.service';
import { PolarChartComponent } from '../polar-chart/polar-chart.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @ViewChild('rawjson', { static: false }) raw: RawJsonViewComponent;
  @ViewChild('polar', { static: false }) polar: PolarChartComponent;
  projects;

  test_data: any[] = [];
  chart_data: any[] = [];
  chart_title: any;
  xAxis: any = {};

  constructor(private ods: ObservableDataService) { }

  ngOnInit() {

    this.ods.getProjectMetrics().subscribe((data) => {
      this.projects = data;
      this.dataRefresh();
    });

    this.chart_title = 'A comparison of Metrics';
  }



  dataRefresh() {
    this.chart_data = flatten(this.projects
      .map(p => p.metrics
        .filter((m) => {
          if (m && m.active) {
            return m.metric;
          }
        })
      )
    );
    console.log(this.chart_data);
  }

}

const flatten = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};
