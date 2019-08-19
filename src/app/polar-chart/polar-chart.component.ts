import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent implements OnInit {

  @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

  @Input() chart_title: any;
  @Input() source: any[] = [];
  @Input() xAxis: any = {
    dataField: 'metric',
    displayText: 'Metric',
    valuesOnTicks: true,
    labels: { autoRotate: false }
  };

  chartInstance;
  dataAdapter: any;
  padding: any;
  titlePadding: any;
  valueAxis: any;
  seriesGroups: any;
  selected_type: string = 'spline';
  seriesList: string[] = ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'];

  ngOnInit(): void {
    this.valueAxis = { unitInterval: 1, };
    this.padding = { left: 5, top: 5, right: 5, bottom: 5 };
    this.titlePadding = { left: 0, top: 5, right: 0, bottom: 5 };
    this.seriesGroups =
      [
        {
          spider: true,
          radius: 275,
          startAngle: 0,
          endAngle: 360,
          type: this.selected_type,
          series: [
            { dataField: 'PB_0', displayText: 'PB 0', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#440154", fillColor: "#440154" },
            { dataField: 'PB_1', displayText: 'PB 1', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#414487", fillColor: "#414487" },
            { dataField: 'PB_2', displayText: 'PB 2', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#2a788e", fillColor: "#2a788e" },
            { dataField: 'PB_3', displayText: 'PB 3', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#22a884", fillColor: "#22a884" },
            { dataField: 'PB_5', displayText: 'PB 5', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#7ad151", fillColor: "#7ad151" },
            { dataField: 'PB_10', displayText: 'PB 10', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#fde725", fillColor: "#fde725" }
          ]
        }
      ];

    this.chartInstance = this.myChart;

  }

  updateSelf() {
    this.seriesGroups =
      [
        {
          spider: true,
          radius: 275,
          startAngle: 0,
          endAngle: 360,
          type: this.selected_type,
          series: [
            { dataField: 'PB_0', displayText: 'PB 0', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#440154", fillColor: "#440154" },
            { dataField: 'PB_1', displayText: 'PB 1', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#414487", fillColor: "#414487" },
            { dataField: 'PB_2', displayText: 'PB 2', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#2a788e", fillColor: "#2a788e" },
            { dataField: 'PB_3', displayText: 'PB 3', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#22a884", fillColor: "#22a884" },
            { dataField: 'PB_5', displayText: 'PB 5', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#7ad151", fillColor: "#7ad151" },
            { dataField: 'PB_10', displayText: 'PB 10', opacity: 0.42, lineWidth: 1.24, radius: 1.2, symbolType: 'circle', lineColor: "#fde725", fillColor: "#fde725" }
          ]
        }
      ];
    this.myChart.update();
  }
}
