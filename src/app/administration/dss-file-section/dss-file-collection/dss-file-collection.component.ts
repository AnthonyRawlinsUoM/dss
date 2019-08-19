import { Component, OnInit } from '@angular/core';
import { DSSFile } from '../DSSFile';

@Component({
  selector: 'app-dss-file-collection',
  templateUrl: './dss-file-collection.component.html',
  styleUrls: ['./dss-file-collection.component.css']
})
export class DssFileCollectionComponent implements OnInit {

  sample_data: DSSFile[] = [
    {
      name: 'Test.dss',
      path: '',
      last_modified: '2019-08-02T02:25:56+0000',
      extracted: [
        {
          project: 'People and Houses',
          metrics: ['houses_exposed', 'houses_lost']
        },
        {
          project: 'Infrastructure',
          metrics: ['powerline_length_loss']
        },
      ]
    },
    {
      name: 'Test.dss2',
      path: '',
      last_modified: '2019-08-02T02:25:56+0000',
      extracted: [
        {
          project: 'People and Houses',
          metrics: ['houses_exposed', 'houses_lost']
        },
        {
          project: 'Infrastructure',
          metrics: ['powerline_length_loss']
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
