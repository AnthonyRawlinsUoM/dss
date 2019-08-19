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

  test_data: any[] = []
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
    this.chart_data = flatten(this.projects.map(p => p.metrics.filter(function(m) {
      if (m && m.active) {
        return m.metric;
      }
    })
    ));
    console.log(this.chart_data);
    this.testData();
  }

  testData() {

    let chart_data = this.chart_data;
    if (chart_data.active != undefined) {
      delete chart_data.active;
    }
    for (let cd in chart_data) {
      chart_data[cd]['PB_0'] = Math.random() * 7;
      chart_data[cd]['PB_1'] = Math.random() * 5;
      chart_data[cd]['PB_2'] = Math.random() * 3;
      chart_data[cd]['PB_3'] = Math.random() * 2;
      chart_data[cd]['PB_5'] = Math.random() * 1;
      chart_data[cd]['PB_10'] = Math.random() * 1;
    }

    console.log(chart_data);

    this.test_data = chart_data;

    this.chart_title = 'A comparison of ' + this.test_data.length + ' DSS Metrics';

    this.xAxis = {
      dataField: 'metric',
      displayText: 'DSS Metric',
      valuesOnTicks: true,
      labels: { autoRotate: true }
    };

    this.polar.updateSelf();
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
