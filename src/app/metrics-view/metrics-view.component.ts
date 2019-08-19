import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SessionLogService } from '../session-log.service';

@Component({
  selector: 'app-metrics-view',
  templateUrl: './metrics-view.component.html',
  styleUrls: ['./metrics-view.component.css']
})
export class MetricsViewComponent implements OnInit {

  @Input() metric;

  constructor(private logger: SessionLogService) {}

  ngOnInit() {
  }
}
