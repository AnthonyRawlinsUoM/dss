import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileElement } from '../model/file-element';
import { NewFolderModal } from '../modals/new-folder-dialog/new-folder-dialog.component';
import { SuiModalService, ModalSize } from 'ng2-semantic-ui';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit {

  @Input() fileElements: FileElement[];
  @Input() canNavigateUp: string;
  @Input() path: string;

  @Output() folderAdded = new EventEmitter<{ name: string }>();
  @Output() elementRemoved = new EventEmitter<FileElement>();
  @Output() elementRenamed = new EventEmitter<FileElement>();
  @Output() elementMoved = new EventEmitter<{
    element: FileElement
    moveTo: FileElement
  }>();
  @Output() navigatedDown = new EventEmitter<FileElement>();
  @Output() navigatedUp = new EventEmitter();

  modalSize = ModalSize.Small;

  constructor(private modalService: SuiModalService) { }

  ngOnInit() {
  }

  deleteElement(element: FileElement) {
    this.elementRemoved.emit(element);
  }

  navigate(element: FileElement) {
    if (element.isFolder) {
      this.navigatedDown.emit(element);
    }
  }

  navigateUp() {
    this.navigatedUp.emit();
  }

  moveElement(element: FileElement, moveTo: FileElement) {
    this.elementMoved.emit({ element: element, moveTo: moveTo });
  }

  openNewFolderDialog() {
    console.log("opening new folder dialog now");
    let ftest = 'test';

    this.modalService
      .open(new NewFolderModal("New Folder", "Enter the name of the new folder:", ftest, this.modalSize))
      .onApprove((data) => {

        console.log("User has accepted new folder creation.");
        // TODO - actually create the folder.
        console.log(data);
      })
      .onDeny(() => console.log("User has denied new folder creation."));
  }

  openRenameDialog(element: FileElement) {
    console.log('Renaming...');
  }

}
