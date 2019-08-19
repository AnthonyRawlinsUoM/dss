import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrappeCollectionComponent } from './frappe-collection/frappe-collection.component';



@NgModule({
  declarations: [FrappeCollectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FrappeCollectionComponent
  ]
})
export class FrappeSectionModule { }
