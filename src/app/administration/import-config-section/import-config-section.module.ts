import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImportConfigCollectionComponent } from './import-config-collection/import-config-collection.component';


@NgModule({
  declarations: [ImportConfigCollectionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ImportConfigCollectionComponent
  ]

})
export class ImportConfigSectionModule { }
