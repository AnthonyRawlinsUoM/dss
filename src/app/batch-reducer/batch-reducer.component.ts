import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {jqxRangeSelectorComponent} from 'jqwidgets-ng/jqxrangeselector';
import {SessionLogService} from '../session-log.service';


@Component({
  selector: 'app-batch-reducer',
  templateUrl: './batch-reducer.component.html',
  styleUrls: ['./batch-reducer.component.css']
})
export class BatchReducerComponent implements OnInit {
  @ViewChild('batchReducer', {static: false}) batchReducer: jqxRangeSelectorComponent;

  @Input() min: Number = 0;
  @Input() max: Number = 100;
  @Input() range: any = { from: 0, to: 100 };

  @Output() batchRangeChange: EventEmitter<any> = new EventEmitter();

  constructor(private logger: SessionLogService) { }

  ngOnInit() {
  }

  update() {
    let changedRange = this.batchReducer.getRange();
    this.batchRangeChange.emit(changedRange);
    this.logger.log('Batch Range Selection changed from: ' + changedRange['from'] + ' to: '+ changedRange['to'] + '.');
  }

}
