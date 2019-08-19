import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { ExtractionComponent } from './extraction/extraction.component';
import { ImportConfigSectionModule } from './import-config-section/import-config-section.module';
import { FrappeSectionModule } from './frappe-section/frappe-section.module';
import { ImportTaskSectionModule } from './import-task-section/import-task-section.module';
import { DssFileSectionModule } from './dss-file-section/dss-file-section.module';
import { FileExplorerModule } from './file-explorer/file-explorer.module';

@NgModule({
  declarations: [
    AdminConsoleComponent,
    ExtractionComponent
  ],
  imports: [
    CommonModule,
    ImportConfigSectionModule,
    FrappeSectionModule,
    ImportTaskSectionModule,
    DssFileSectionModule,
    FileExplorerModule
  ],
  exports: [
    AdminConsoleComponent,
    ExtractionComponent
  ]
})
export class AdministrationModule { }
