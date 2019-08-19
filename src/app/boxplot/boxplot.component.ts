import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NvD3Component } from 'ng2-nvd3';

declare let d3: any;

@Component({
  selector: 'app-boxplot',
  templateUrl: './boxplot.component.html',
  styleUrls: ['./boxplot.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoxplotComponent implements OnInit {
  @ViewChild('d3', { static: false }) plot: NvD3Component;

  options;
  isDimmed = true;
  @Input() data;
  @Input() colors: any[] = [];
  @Input() project;
  @Input() metric;


  constructor() {
  }

  ngOnInit() {
    this.options = {
      'chart': {
        'type': 'boxPlotChart',
        'height': 600,
        'yScale': d3.scale.log(),
        'margin': {
          'top': 20,
          'right': 20,
          'bottom': 30,
          'left': 50
        },
        'styles': {
          'classes': [],
          'css': []
        },
        'color': this.colors,
        'maxBoxWidth': 55
      }
    };

    // Overwritten later...
    this.data = [
      {
        label: 'Sample data only',
        values: {
          Q1: 180,
          Q2: 200,
          Q3: 250,
          whisker_low: 115,
          whisker_high: 400,
          outliers: [50, 100, 425]
        }
      }
    ];
  }

  update() {
    console.log(this.colors);
    this.options.chart.color = this.colors;
    // this.plot.update();
  }


  dim() {
    this.isDimmed = true;
  }

  undim() {
    this.isDimmed = false;
  }
}
