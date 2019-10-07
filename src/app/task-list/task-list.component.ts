import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ObservableDataService } from '../observable-data.service';
import { SortDirection } from '../sort-direction';
import { Task } from '../task';

import moment from 'moment';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  direction = 'DOWN'; // Default Priority

  constructor(private ods: ObservableDataService) { }

  ngOnInit() {

    this.ods.getTasks().subscribe((task) => {
      if (this.tasks.filter(x => x.uuid === task['uuid']).length == 0) {
        this.tasks.push(task);
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);

    // Reprioritise here using previousIndex and currentIndex
  }

  purge() {
    this.ods.purge();
    this.tasks = [];
  }

  sortUp() {
    this.direction = 'UP';
    this.tasks = this.sorted();
  }

  sortDown() {
    this.direction = 'DOWN';
    this.tasks = this.sorted();
  }

  sorted() {
    if (this.direction == SortDirection.UP) {
      // return this.tasks.sort((a,b) => a.priority.localeCompare(b.priority)); // String values
      // return this.tasks.sort((a, b) => b.priority - a.priority).reverse(); // Numeric values
      return this.tasks.sort((a, b) => moment.duration(moment(b.submitted_at).diff(moment(a.submitted_at))).as('minutes')); // Date values
    } else if (this.direction == SortDirection.DOWN) {
      return this.tasks.sort((a, b) => moment.duration(moment(a.submitted_at).diff(moment(b.submitted_at))).as('minutes')); // Date values
    }
  }
}
