import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { ObservableDataService } from '../observable-data.service';
import { SessionLogService } from '../session-log.service';

import { TransitionController, Transition, TransitionDirection } from "ng2-semantic-ui";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit, AfterViewInit {

  @Input() task: Task;

  constructor(private ods: ObservableDataService, private log: SessionLogService) { }

  ngOnInit() { }

  ngAfterViewInit() {

    this.ods.getTaskEvents().subscribe((data) => {
      console.log('Got TaskEvent!');
      if (this.task.uuid == data['uuid']) {
        this.task.status = data['status'];
      }
    });

    this.ods.getPartialResults().subscribe((data) => {
      console.log('Progress test: ' + data);
      if (this.task.uuid == data['uuid']) {
        this.task.progress = data['progress'];
        // this.task.status = data['status'];
      }
    });
  }

  revoke() {
    this.task.status = TaskStatus.REVOKED;
    this.log.log('Revoking ' + this.task.uuid);
    this.ods.revokeTask(this.task);
    this.animate();
  }

  public transitionController = new TransitionController();

  public animate(transitionName: string = "fade down") {
    this.transitionController.animate(
      new Transition(transitionName, 500, TransitionDirection.Out, () => console.log("Completed transition.")));
  }

  advance() {
    this.log.log('Advancing ' + this.task.uuid);
    // Just some code to aid visual debugging... remove from production!
    if (this.task.progress < 100) {
      this.task.progress += 10;
      this.task.status = TaskStatus.STARTED;
    }
    if (this.task.progress == 100) {
      this.task.status = TaskStatus.SUCCESS;
    }
  }
}
