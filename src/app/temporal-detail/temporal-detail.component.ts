import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MetricService } from '../metric.service';
import { SessionLogService } from '../session-log.service';
import { ObservableDataService } from '../observable-data.service';
import { NthColorService } from '../nth-color.service';

import { BoxplotComponent } from '../boxplot/boxplot.component';
import { RangeSelectorComponent } from '../range-selector/range-selector.component';
import { RegimePickerComponent } from '../regime-picker/regime-picker.component';
import { BatchReducerComponent } from '../batch-reducer/batch-reducer.component';
import { RawJsonViewComponent } from '../raw-json-view/raw-json-view.component';

@Component({
  selector: 'app-temporal-detail',
  templateUrl: './temporal-detail.component.html',
  styleUrls: ['./temporal-detail.component.css']
})
export class TemporalDetailComponent implements OnInit {

  @ViewChild('rawjson', { static: false }) rawjson: RawJsonViewComponent;
  @ViewChild('boxplot', { static: false }) boxPlot: BoxplotComponent;
  @ViewChild('temporalRangeSelector', { static: false }) temporalRangeSelector: RangeSelectorComponent;
  @ViewChild('batchRangeReducer', { static: false }) batchRangeReducer: BatchReducerComponent;
  @ViewChild('regimePicker', { static: false }) regimePicker: RegimePickerComponent;

  project;
  metric;
  scope;
  pb_levels;
  frappe;
  colors: any[] = [];

  batch_aggregation = true;
  time_aggregation = true;

  time_series_data: any[] = [];

  title = '';
  desc = '';

  batch_range = { from: 10, to: 50 };  // TODO -replace with extents of actual data!
  time_range = { from: 0, to: 100 };   // TODO -replace with extents of actual data!

  temporalProjects = [
    { 'name': 'People', 'id': 'People' },
    { 'name': 'Houses', 'id': 'Houses' },
    { 'name': 'Infrastructure', 'id': 'Infrastructure' },
    { 'name': 'Regional Economy', 'id': 'Regional Economy' },
  ];

  summary: any;
  box_plot_data: any;
  boxplot_visible = false;
  time_subs;


  data_subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MetricService,
    private logger: SessionLogService,
    private ods: ObservableDataService,
    private nth: NthColorService
  ) { }

  ngOnInit() {
    this.frappe = 'Run_24jun2019';  // TODO - Dynamic parameter
    this.metric = { id: 0, name: 'Example 1' };
    this.scope = { 'wildfire': true, 'prescribed': true };
    // Debugging ...
    this.pb_levels = [
      { id: 0, name: 'PB 0' },
      { id: 1, name: 'PB 1' },
      { id: 2, name: 'PB 2' },
      { id: 3, name: 'PB 3' },
      { id: 5, name: 'PB 5' },
      { id: 10, name: 'PB 10' }
    ];
    this.route.paramMap.subscribe(params => {
      this.logger.log('ID is: ' + params.get('id'));
      this.project = params.get('id');
      console.log(this.project);
      this.logger.log('Project is now: ' + this.project);
    });

    let regime = this.regimeFromPB(this.pb_levels);

    // Call signature example = getSummary(frappe, regime, metric, scope)
    let frappe_query = {
      frappe: this.frappe,
      project: this.project,
      regime: regime,
      metric: this.metric.name,
      scope: this.scope,
      ranges: {
        time: this.time_range,
        batch: this.batch_range
      }
    };
    this.data_subscription = this.ods.getSummary(frappe_query).subscribe((data) => {
      this.logger.log('Got summary subscription data');
      this.box_plot_data = data;
    });

    this.time_subs = this.ods.getTimeSeries(frappe_query).subscribe((data) => {
      this.time_series_data = data;
    });

  }

  onRegimeChange(regimes) {
    console.log('got regime change:', regimes.map(m => { return m.name }));
    this.pb_levels = regimes;
    this.doDataRefresh();
  }

  onMetricChange(metric) {
    console.log('got metric change:', metric.name);
    this.metric = metric;
    this.doDataRefresh();
  }

  onScopeChange(scope) {
    console.log('got scope change:', scope);
    this.scope = scope;
    this.doDataRefresh();
  }

  onTemporalRangeChange(time_range) {
    console.log('Got change of temporal range.');
    this.time_range = time_range;
    this.doDataRefresh();
  }

  onBatchRangeChange(batch_range) {
    console.log('Got change of batch range.');
    this.batch_range = batch_range;
    this.doDataRefresh();
  }

  private regimeFromPB(pb_levels) {
    return pb_levels.map((lvl) => { return lvl.name });
  }

  doDataRefresh() {
    this.boxPlot.dim();

    this.logger.log('Doing Summary Refresh now...');
    console.log('Filtering summary data');
    console.log('>> Scope: ' + this.scope);
    console.log('>> Regime (PB_levels): ' + this.regimeFromPB(this.pb_levels));
    console.log('>> Metric: ' + this.metric.name);
    console.log('>> Frappe:' + this.frappe);

    if (this.pb_levels.length > 0 && this.metric != undefined) {
      let colormap = this.nth.getViridisColors(0, this.pb_levels.length).subscribe(
        (data) => {
          console.log('got viridis colours!');
          console.log(data);
          this.boxPlot.colors = data;
          this.boxPlot.update();
        });

      let regime = this.regimeFromPB(this.pb_levels);

      // ODS -> getSummary(frappe, metric, regime, scope)


      // public getSummary(frappe, metric, regime, scope, ranges) {
      // console.log('getSummary(' + metric + ',' + regime + ',' + scope + ')');

      let summary_query = {
        frappe: this.frappe,
        metric: this.metric.name,
        regime: regime,
        project: this.project,
        scope: this.scope,
        ranges: {
          time: this.time_range,
          batch: this.batch_range
        }
      };

      if (this.data_subscription) {
        this.data_subscription.unsubscribe();
      }

      this.data_subscription = this.ods.getSummary(summary_query).subscribe((data) => {
        this.box_plot_data = data;
        this.boxPlot.undim();
      });

      if (this.time_subs) {
        this.time_subs.unsubscribe();
      }

      this.time_subs = this.ods.getTimeSeries(summary_query).subscribe((data) => {
        this.time_series_data = data;
      });

    }



    // // this.datatable.onMetricChoice(this.metric);
    // let boxp: any = [];
    //
    // let filtered = this.summary
    //   .filter(f => {
    //     return f.id === this.scope;
    //   })
    //   .map(f => {
    //     return f.summary_table.filter(m => {
    //       return m.name === this.metric;
    //     }).map(m => {
    //
    //       this.pb_levels
    //         .forEach(lvl => {
    //
    //           // Outliers not supplied from API
    //           boxp.push(
    //             {
    //               label: lvl.name,
    //               values: {
    //                 Q1: m.summary[lvl.name]['25%'],
    //                 Q2: m.summary[lvl.name]['50%'],
    //                 Q3: m.summary[lvl.name]['75%'],
    //                 whisker_low: m.summary[lvl.name]['min'],
    //                 whisker_high: m.summary[lvl.name]['max'],
    //                 outliers: []
    //               }
    //             }
    //           );
    //         });
    //
    //       this.title = this.metric + ' due to ' + this.scope;
    //       this.desc = 'Description of metric goes here';
    //       this.boxplot_visible = true;
    //
    //     });
    //   });
    // // console.log('Plotting: ' + this.title);
    // // console.log(this.box_plot_data);
    // // this.box_plot_data = filtered;
    //
    // console.log(filtered);
  }

}
