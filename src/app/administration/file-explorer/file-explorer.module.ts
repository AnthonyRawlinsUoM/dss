import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileExplorerComponent } from './file-explorer/file-explorer.component';

@NgModule({
  declarations: [FileExplorerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FileExplorerComponent]
})
export class FileExplorerModule { }
