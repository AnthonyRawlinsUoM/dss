import { Component, OnInit } from '@angular/core';
import { ImportConfig } from '../ImportConfig';
import { SuiCheckboxModule, SuiDropdownModule } from 'ng2-semantic-ui';


@Component({
  selector: 'app-import-config-collection',
  templateUrl: './import-config-collection.component.html',
  styleUrls: ['./import-config-collection.component.css']
})
export class ImportConfigCollectionComponent implements OnInit {

  overwrites: true;

  all_formats = [
    {
      version: 1.0,
      extension: ".dss",
      label: ".dss (Generic)"
    },
    {
      version: 2.0,
      extension: ".dss2",
      label: ".dss (version 2)"
    }];

  ecfs: ImportConfig[] = [
    {
      name: "Test Import Config 1",
      extractions: [{
        inactive: [
          "Hydrology",
          "Recreational",
          "ImplementationCost",
          "RegionalEconomy",
          "Experiential",
          "BioDiversity",
          "Carbon"
        ],
        active: [
          "PeopleHouses",
          "Infrastructure"
        ]
      }],
      options: {
        levels: [
          0,
          1,
          2,
          3,
          5,
          10
        ]
      },
      settings: {
        input_path: "/media/arawlins/Seagate4TB/DATA/DSS/Frappeator_Output/Run_16May2019/Central_highlands_16may2019/centralhigh1apr2019/",
        frappe_output: "centralhigh1apr2019",
        output_path: "/media/arawlins/Olympic/GENERIC/RxPyNode/stevejobs/steve/outputs/",
        output_format: {
          version: 2.0,
          extension: ".dss2"
        },
        name: "Test",
        overwrite: true
      },
      meta: {
        requested_on: "2019-07-23T11:58:57.343854",
        requested_by: "me"
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onExtractionsChange(ev) {

  }
  selectPath(evt) {
    console.log(evt.target.files)
  }
}
