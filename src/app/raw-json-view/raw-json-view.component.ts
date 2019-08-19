import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-raw-json-view',
  templateUrl: './raw-json-view.component.html',
  styleUrls: ['./raw-json-view.component.css']
})
export class RawJsonViewComponent implements OnInit {


  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
