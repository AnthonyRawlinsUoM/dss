import { Component, OnInit, ViewChild } from '@angular/core';
import { ExtractionComponent } from '../extraction/extraction.component';
import { FileElement } from '../file-explorer/model/file-element';
import { SuiModalService } from 'ng2-semantic-ui';
import { FileService } from '../file-explorer/file.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit {
  @ViewChild('extraction_form', { static: false }) extraction_form: ExtractionComponent;

  currentPath = 'root';
  fileElements: Observable<FileElement[]>;
  currentRoot: FileElement;
  canNavigateUp = false;

  constructor(private modalService: SuiModalService, private fileService: FileService) { }

  ngOnInit() {
  }

  addFolder(folder: { name: string }) {
    this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }
  //
  removeElement(element: FileElement) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }
  //
  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }
  //
  renameElement(element: FileElement) {

    this.fileService.update(element.id, { name: element.name });


    this.updateFileElementQuery();
  }
  //
  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }
  //
  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }
  //
  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }
  //
  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }
  //
  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }

}
