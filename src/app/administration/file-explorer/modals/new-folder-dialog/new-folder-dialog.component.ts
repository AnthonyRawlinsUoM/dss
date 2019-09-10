import { Component, OnInit } from '@angular/core';
import {SuiModal, ComponentModalConfig, ModalSize} from "ng2-semantic-ui";


interface IConfirmModalContext {
    title:string;
    question:string;
    folderName:string;
}
@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.css']
})
export class NewFolderDialogComponent implements OnInit {
  constructor(public modal:SuiModal<IConfirmModalContext, string, string>) { }

  ngOnInit() {
  }

}
export class NewFolderModal extends ComponentModalConfig<IConfirmModalContext, string, string> {
    folderName: string;

    constructor(title:string, question:string, folderName:string, size = ModalSize.Small) {
        super(NewFolderDialogComponent, { title, question, folderName });

        this.isClosable = false;
        this.transitionDuration = 200;
        this.size = size;
        this.folderName = folderName;
    }
}
