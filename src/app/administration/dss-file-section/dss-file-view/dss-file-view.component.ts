import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dss-file-view',
  templateUrl: './dss-file-view.component.html',
  styleUrls: ['./dss-file-view.component.css']
})
export class DssFileViewComponent implements OnInit {

  @Input() file;

  constructor() { }

  ngOnInit() {
  }

}
