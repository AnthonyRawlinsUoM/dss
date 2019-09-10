import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.css']
})
export class ExtractionComponent implements OnInit {

  local = '/media/arawlins/Olympic/GENERIC/RxPyNode/ReactiveServer/src/assets/projects/';
  base = '/nfs/pyromancer/Projects/DSS/data/Frappeator_Output/';

  constructor() {
  }

  ngOnInit() {
  }

}
