import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';
import { SessionLogService } from '../session-log.service';

@Component({
  selector: 'app-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.css']
})
export class RangeSelectorComponent implements OnInit {
  @ViewChild('rangeSelector', { static: false }) myRangeSelector: jqxRangeSelectorComponent;


  @Input() min: 0
  @Input() max: 100;
  @Input() range: any = { from: 0, to: 100 };

  @Output() rangeChange: EventEmitter<any> = new EventEmitter();


  constructor(private logger: SessionLogService) { }

  ngOnInit() {
  }

  update() {
    let changedRange = this.myRangeSelector.getRange();
    this.rangeChange.emit(changedRange);
    this.logger.log('Temporal Range Selection changed from: ' + changedRange['from'] + ' to: ' + changedRange['to'] + '.');
  }
}
