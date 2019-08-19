import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DssFileCollectionComponent } from './dss-file-collection/dss-file-collection.component';
import { DssFileViewComponent } from './dss-file-view/dss-file-view.component';



@NgModule({
  declarations: [DssFileCollectionComponent, DssFileViewComponent],
  imports: [
    CommonModule
  ],
  exports: [DssFileCollectionComponent, DssFileViewComponent]
})
export class DssFileSectionModule { }
