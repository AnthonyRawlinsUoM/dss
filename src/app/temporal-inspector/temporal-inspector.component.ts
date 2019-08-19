import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MetricService } from '../metric.service';
@Component({
  selector: 'app-temporal-inspector',
  templateUrl: './temporal-inspector.component.html',
  styleUrls: ['./temporal-inspector.component.css']
})
export class TemporalInspectorComponent implements OnInit {

  metric$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MetricService) { }

  ngOnInit() {
    this.metric$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMetric(params.get('id')))
    );
  }

}
