import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../observable-data.service'


@Component({
  selector: 'app-frappenator-controller',
  templateUrl: './frappenator-controller.component.html',
  styleUrls: ['./frappenator-controller.component.css']
})
export class FrappenatorControllerComponent implements OnInit {

  foutputs: any[] = [];

  constructor(private ods: ObservableDataService) { }

  ngOnInit() {

    this.ods.getFrappenatorOutput().subscribe((list) => {
      this.foutputs = list;
    });
  }

}
