import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css']
})
export class TimeSeriesComponent implements OnInit {
  @ViewChild('timeseries', { static: false }) timeseries: jqxChartComponent;

  constructor() { }

  ngOnInit() {
  }

  @Input() seriesGroups: any;

  padding: any = { left: 10, top: 5, right: 10, bottom: 5 };
  titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };
  isDimmed;

  @Input() colors: any[] = [];
  @Input() project;
  @Input() metric;
  @Input() xAxis: any =
    {
      dataField: 'scenario_id',

      valuesOnTicks: true,
      tickMarks: {
        visible: true,
        interval: 1,
        color: '#3F3F3F'
      },
      unitInterval: 1,
      gridLines: {
        visible: true,
        interval: 1,
        color: '#3F3F3F'
      }
    };
  valueAxis: any =
    {
      visible: true,
      title: { text: 'Maximum' },
      tickMarks: { color: '#3F3F3F' }
    };


  update() {
    this.timeseries.update();
  }

  dim() {
    this.isDimmed = true;
  }

  undim() {
    this.isDimmed = false;
  }
}
