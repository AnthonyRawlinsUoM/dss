import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { NewFolderDialogComponent } from './modals/new-folder-dialog/new-folder-dialog.component';
import { RenameDialogComponent,  } from './modals/rename-dialog/rename-dialog.component';

@NgModule({
  declarations: [FileExplorerComponent, NewFolderDialogComponent, RenameDialogComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FileExplorerComponent],
  entryComponents: [NewFolderDialogComponent, RenameDialogComponent]
})
export class FileExplorerModule { }
