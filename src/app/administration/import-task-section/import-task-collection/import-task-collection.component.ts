import { Component, OnInit } from '@angular/core';
import { SessionLogService } from '../../../session-log.service';

@Component({
  selector: 'app-import-task-collection',
  templateUrl: './import-task-collection.component.html',
  styleUrls: ['./import-task-collection.component.css']
})
export class ImportTaskCollectionComponent implements OnInit {

  log: string = "Log begins";
  log_subscription;
  log_entries: Queue<string>;
  log_limit:number = 50;  // Last 50 messages only

  constructor(private session: SessionLogService) {
    this.log_entries = new Queue<string>();
  }

  ngOnInit() {
    this.log_subscription = this.session.getLog().subscribe((data) => {
      console.log(data);

      if(this.log_entries.length() > this.log_limit) {
        this.log_entries.pop();
      }
      this.log_entries.push(data);
      this.refresh();
    });
    for(let i=0; i<100; i++) {
      this.session.log('Test: ' + i);
      
    }
  }

  refresh() {
    this.log = this.log_entries.asArray().join('\n');
  }

}

export class Queue<T> {

  _store: T[] = [];

  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.shift();
  }
  asArray() {
    return this._store;
  }
  length() {
    return this._store.length;
  }
}
