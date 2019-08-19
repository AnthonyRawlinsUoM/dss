import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImportConfigCollectionComponent } from './import-config-collection/import-config-collection.component';
import { SuiModule } from 'ng2-semantic-ui';


@NgModule({
  declarations: [ImportConfigCollectionComponent],
  imports: [
    CommonModule,
    SuiModule,
    FormsModule
  ],
  exports: [
    ImportConfigCollectionComponent
  ]

})
export class ImportConfigSectionModule { }
