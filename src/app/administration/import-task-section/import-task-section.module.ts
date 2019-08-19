import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportTaskCollectionComponent } from './import-task-collection/import-task-collection.component';



@NgModule({
  declarations: [ImportTaskCollectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ImportTaskCollectionComponent
  ]
})
export class ImportTaskSectionModule { }
