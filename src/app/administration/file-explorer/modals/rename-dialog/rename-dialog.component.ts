import { Component, OnInit } from '@angular/core';
import {SuiModal, ComponentModalConfig, ModalSize} from "ng2-semantic-ui";

interface IConfirmModalContext {
    title:string;
    question:string;
    folderName:string;
}
@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.css']
})
export class RenameDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class RenameFolderModal extends ComponentModalConfig<IConfirmModalContext, void, void> {
    constructor(title:string, question:string, folderName:string, size = ModalSize.Small) {
        super(RenameDialogComponent, { title, question, folderName });

        this.isClosable = false;
        this.transitionDuration = 200;
        this.size = size;
    }
}
