import { Component, EventEmitter, OnInit, Input, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionLogService } from '../session-log.service';
import { SuiModule } from 'ng2-semantic-ui';
import { NthColorService } from '../nth-color.service';
import { MetricService } from '../metric.service';

@Component({
  selector: 'app-regime-picker',
  templateUrl: './regime-picker.component.html',
  styleUrls: ['./regime-picker.component.css']
})
export class RegimePickerComponent implements OnInit {

  @ViewChild('regimeSelect', { static: false }) regimeSelect: SuiSelectComponent;

  @Input() project;

  scenarios: any = [];
  pb_levels: any = [];
  all_metrics: any = [];

  regimes: any;

  @Output() regimeChange: EventEmitter<any> = new EventEmitter();
  @Output() metricChange: EventEmitter<any> = new EventEmitter();
  @Output() scopeChange: EventEmitter<any> = new EventEmitter();

  @Output() wildfire_season = true;
  @Output() prescribed_season = true;

  // TODO - dynamic
  metric;
  scope;

  nth_colors;


  // private api = 'http://localhost:5050';

  constructor(private logger: SessionLogService,
    private http: HttpClient,
    private nth: NthColorService,
    private ms: MetricService) {

  }

  ngOnInit() {
    // const metr = this.http.get(`${this.api}/assets/metrics.json`);

    this.ms.getMetric(this.project).subscribe((data) => {
      console.log('Metric data incoming...');
      this.all_metrics = data;
    });

    // this.all_metrics = [
    //   { id: 0, name: 'Example 1' },
    //   { id: 1, name: 'Example 2' },
    //   { id: 2, name: 'Example 3' },
    //   { id: 3, name: 'Example 4' },
    //   { id: 4, name: 'Example 5' },
    //   { id: 5, name: 'Example 6' },
    //   { id: 6, name: 'Example 7' },
    //   { id: 7, name: 'Example 8' },
    //   { id: 8, name: 'Example 9' },
    //   { id: 9, name: 'Example 10' },
    // ]

    this.regimes = [
      { id: 0, name: 'PB 0' },
      { id: 1, name: 'PB 1' },
      { id: 2, name: 'PB 2' },
      { id: 3, name: 'PB 3' },
      { id: 5, name: 'PB 5' },
      { id: 10, name: 'PB 10' }
    ];

    this.pb_levels = this.regimes;
    this.metric = { id: 0, name: 'Example 1' };
  }

  onWildfireSeason() {
    if (!this.wildfire_season) {
      if (this.prescribed_season === this.wildfire_season) {
        this.prescribed_season = true;
      }
    }
    this.onScopeChange();
  }
  onPrescribedSeason() {
    if (!this.prescribed_season) {
      if (this.prescribed_season === this.wildfire_season) {
        this.wildfire_season = true;
      }
    }
    this.onScopeChange();
  }

  onScopeChange() {
    this.scope = { 'wildfire': this.wildfire_season, 'prescribed': this.prescribed_season };
    console.log('Emitting Scope Change:', this.scope);
    this.scopeChange.emit(this.scope);
    this.logger.log('Scope has changed to: ' + this.scope);

    // this.regimeSelect.className = this.select.className.concat("viridis" + this.pb_levels.length);
  }

  onRegimeChange() {
    console.log('Emitting Regime Change:', this.pb_levels);
    this.regimeChange.emit(this.pb_levels);
    this.logger.log('Regime has changed to: ' + this.pb_levels);

    // this.regimeSelect.className = this.select.className.concat("viridis" + this.pb_levels.length);
  }

  onMetricChange() {
    console.log('Emitting Metric Change:', this.metric);
    this.metricChange.emit(this.metric);
    this.logger.log('Metric has changed to: ' + this.metric);
    // this.regimeSelect.className = this.select.className.concat("viridis" + this.pb_levels.length);
  }
}
