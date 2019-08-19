import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ObservableDataService } from '../observable-data.service';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { SuiDropdownModule } from 'ng2-semantic-ui';

import { SessionLogService } from '../session-log.service';


const license = 'Requires jqWidgets Developer Or Team Licence!';


@Component({
  selector: 'app-data-grid-view',
  templateUrl: './data-grid-view.component.html',
  styleUrls: ['./data-grid-view.component.css']
})
export class DataGridViewComponent implements AfterViewInit {
  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

  private data = [];

  ngAfterViewInit(): void {
    console.log(this.data);
    console.log(this.observableArray);

    this.updateLog(this.observableArray);
  }

  constructor(private datasource: ObservableDataService,
    private sess: SessionLogService) {

    this.datasource.requestData();

    this.datasource
      .getData()
      .subscribe((dataset) => {
        console.log('Got data from server!');
        console.log(dataset);
        this.data = dataset;

        for (let i = 0; i < dataset.length; i++) {
          this.observableArray.push(dataset[i]);
        }
      });
  }

  observableArray: any = new jqx.observableArray(this.data,
    (changed: any): void => {
      this.updateLog(this.observableArray);

      // Publish changes??
      // See: changed
    });

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '100%';
    }
    return 850;
  }

  source: any =
    {
      localdata: this.observableArray,
      datatype: 'observableArray',
      datafields:
        [
          { name: 'col1', type: 'number' },
          { name: 'col2', type: 'number' },
          { name: 'col3', type: 'number' },
          { name: 'col4', type: 'number' },
          { name: 'col5', type: 'number' },
          { name: 'col6', type: 'number' }
        ]
    };


  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] =
    [
      { text: 'A', datafield: 'col1' },
      { text: 'B', datafield: 'col2' },
      { text: 'C', datafield: 'col3' },
      { text: 'D', datafield: 'col4' },
      { text: 'E', datafield: 'col5' },
      { text: 'F', datafield: 'col6' }
    ];

  updateLog(observableArray: any): void {
    let rows = '';
    for (let i = 0; i < observableArray.length; i++) {
      rows += observableArray.toJSON(['col1', 'col2', 'col3', 'col4', 'col5', 'col6'], observableArray[i]);
      rows += '<br/>';
    }
    this.sess.log(rows);
  }
  addItemBtnOnClick() {
    let row =
      { 'col1': 0, 'col2': 0, 'col3': 0, 'col4': 0, 'col5': 0, 'col6': 0 };
    let temp = this.observableArray;
    temp.push(row);
    this.observableArray = temp;
  };
  deleteItemBtnOnClick() {
    if (this.observableArray.length > 0) {
      let temp = this.observableArray;
      temp.splice(0, 1);
      this.observableArray = temp;
    }
  };
  updateItemBtnOnClick() {
    if (this.observableArray.length > 0) {
      let row =
        { 'col1': 0, 'col2': 0, 'col3': 0, 'col4': 0, 'col5': 0, 'col6': 0 };
      let temp = this.observableArray;
      temp.set(0, row);
      this.observableArray = temp;
    }
  };
  // updatePathBtnOnClick() {
  //   if (this.observableArray.length > 0) {
  //     let row = [0,0,0,0,0,0];
  //     let temp = this.observableArray;
  //     temp.set('0.col1', row.A);
  //     temp.set('0.col2', row.B);
  //     this.observableArray = temp
  //   }
  // };

  noExport() {
      this.sess.log(license);
      console.log(license);
  };
  
  excelBtnOnClick() {
    this.noExport();
    // this.myGrid.exportdata('xls', 'jqxGrid');
  };
  xmlBtnOnClick() {
    this.noExport();
    // this.myGrid.exportdata('xml', 'jqxGrid');
  };
  csvBtnOnClick() {
    this.noExport();
    // this.myGrid.exportdata('csv', 'jqxGrid');
  };
  tsvBtnOnClick() {
    this.noExport();
    // this.myGrid.exportdata('tsv', 'jqxGrid');
  };
  htmlBtnOnClick() {
    this.noExport();
    // this.myGrid.exportdata('html', 'jqxGrid');
  };
  jsonBtnOnClick() {
    this.noExport();
    // this.myGrid.exportdata('json', 'jqxGrid');
  };
  pdfBtnOnClick() {
    this.noExport();
    // this.myGrid.exportdata('pdf', 'jqxGrid');
  };
}
