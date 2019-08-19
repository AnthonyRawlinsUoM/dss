import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extraction',
  templateUrl: './extraction.component.html',
  styleUrls: ['./extraction.component.css']
})
export class ExtractionComponent implements OnInit {

  @Input('ngModel') root_folder = '/nfs/pyromancer/Projects/DSS/data/Frappeator_Output/';

  constructor() { }

  ngOnInit() {
  }

}
