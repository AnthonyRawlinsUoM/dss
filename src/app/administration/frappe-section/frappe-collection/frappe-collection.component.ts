import { Component, OnInit } from '@angular/core';
import { ObservableDataService } from '../../../observable-data.service'
import { Frappe } from '../Frappe';

@Component({
  selector: 'app-frappe-collection',
  templateUrl: './frappe-collection.component.html',
  styleUrls: ['./frappe-collection.component.css']
})
export class FrappeCollectionComponent implements OnInit {

  foutputs: Frappe[] = [];

  constructor(private ods: ObservableDataService) { }

  ngOnInit() {

    this.ods.getFrappenatorOutput().subscribe((list) => {
      console.log(list);
      this.foutputs = list;
    });
  }
}
