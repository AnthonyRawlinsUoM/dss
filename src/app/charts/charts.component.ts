import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  // @ViewChild('myChart') thechart;

  @Input() title;
  @Input() desc;

  @Input() source: any
    =
    [
      {PB: 'PB 0', min: 0, mean: 50, max: 100 },
      {PB: 'PB 1', min: 0, mean: 50, max: 100 },
      {PB: 'PB 2', min: 0, mean: 50, max: 100 },
      {PB: 'PB 3', min: 0, mean: 50, max: 100 },
      {PB: 'PB 5', min: 0, mean: 50, max: 100 },
      {PB: 'PB 10', min: 0, mean: 50, max: 100 }
    ];

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// TODO - Async DataAdaptors!

  // dataAdapter: any = new jqx.dataAdapter(this.source, {
  //   async: false,
  //   autoBind: true,
  //   loadError: (xhr: any, status: any, error: any) => {
  //     alert('Error loading "' + this.source.url + '" : ' + error);
  //   }
  // });

  padding: any = {left: 10, top: 5, right: 10, bottom: 5};
  titlePadding: any = {left: 50, top: 0, right: 0, bottom: 10};

  categoryAxis = {
    dataField: 'PB',
    showGridLines: true
  };

  xAxis: any =
    {
      dataField: 'PB',
      gridLines: {visible: true},
      valuesOnTicks: false
    };

  valueAxis: any =
    {
      dataField: 'value',
      visible: true,
      title: 'Test',
      tickMarks: {color: '#BCBCBC'},
      axisSize: 'auto',
      // minValue: 0,
      // maxValue: 100,
      displayValueAxis: true,
      description: 'Test Values',
    };

  seriesGroups: any =
    [
      {
        type: 'column',
        columnsGapPercent: 50,
        seriesGapPercent: 0,

        series: [
          {dataField: 'min', displayText: 'Minimum'},
          {dataField: 'mean', displayText: 'Mean'},
          {dataField: 'max', displayText: 'Maximum'}
        ]
      }
    ];

  constructor() {
  }

  ngOnInit() {

  }


}
