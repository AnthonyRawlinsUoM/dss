import { Component, OnInit, Input } from '@angular/core';
import { FrappeProject } from '../FrappeProject'
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: FrappeProject;

  constructor() { }

  ngOnInit() {
  }

}
