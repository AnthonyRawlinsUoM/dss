/* Standard Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

/* Non-standard Modules */
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { SuiModule } from 'ng2-semantic-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NvD3Module } from 'ng2-nvd3';

/* Services */
import { ObservableDataService } from './observable-data.service';
import { MetricService } from './metric.service';
import { NthColorService } from './nth-color.service';

/* jqxWidgets Modules */
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxRangeSelectorModule } from 'jqwidgets-ng/jqxrangeselector';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxSliderModule } from 'jqwidgets-ng/jqxslider';

/* jqxWidgets Derived Components */
import { ChartsComponent } from './charts/charts.component';
import { RangeSelectorComponent } from './range-selector/range-selector.component';

/* Components */
import { TaskListComponent } from './task-list/task-list.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { LogViewerComponent } from './log-viewer/log-viewer.component';
import { DataGridViewComponent } from './data-grid-view/data-grid-view.component';
import { SpatioTemporalQueryFormComponent } from './spatio-temporal-query-form/spatio-temporal-query-form.component';
import { QueryViewComponent } from './query-view/query-view.component';
import { QueryResultsViewComponent } from './query-results-view/query-results-view.component';
import { MapboxViewComponent } from './mapping/mapbox-view/mapbox-view.component';
import { MetricsViewComponent } from './metrics-view/metrics-view.component';
import { ProjectsCollectionComponent } from './projects-collection/projects-collection.component';
import { ProjectsMenuComponent } from './projects-menu/projects-menu.component';
import { TemporalInspectorComponent } from './temporal-inspector/temporal-inspector.component';
import { SpatialInspectorComponent } from './spatial-inspector/spatial-inspector.component';
import { TemporalDetailComponent } from './temporal-detail/temporal-detail.component';
import { SpatialDetailComponent } from './spatial-detail/spatial-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { StudyAreaComponent } from './study-area/study-area.component';
import { RegimePickerComponent } from './regime-picker/regime-picker.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { BatchReducerComponent } from './batch-reducer/batch-reducer.component';
import { RawJsonViewComponent } from './raw-json-view/raw-json-view.component';
import { FrappenatorControllerComponent } from './frappenator-controller/frappenator-controller.component';
import { FrappenatorViewComponent } from './frappenator-view/frappenator-view.component';
import { DatasetViewComponent } from './dataset-view/dataset-view.component';
import { DatasetDetailViewComponent } from './dataset-detail-view/dataset-detail-view.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AdminConsoleComponent } from './administration/admin-console/admin-console.component';

import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { OverviewComponent } from './overview/overview.component';
import { TimeBatchFilterPipe } from './time-batch-filter.pipe';
import { TimeSeriesComponent } from './time-series/time-series.component';

import { AdministrationModule } from './administration/administration.module';
import { MatrixSelectionComponent } from './matrix-selection/matrix-selection.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'temporal', component: TemporalInspectorComponent },
  { path: 'temporal/:id', component: TemporalDetailComponent },
  { path: 'spatial', component: SpatialInspectorComponent },
  { path: 'spatial/:id', component: SpatialDetailComponent },
  { path: 'frappe/:id', component: FrappenatorViewComponent },
  { path: 'study-area', component: StudyAreaComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'admin-console', component: AdminConsoleComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LogViewerComponent,
    DataGridViewComponent,
    TaskListComponent,
    TaskViewComponent,
    SpatioTemporalQueryFormComponent,
    QueryViewComponent,
    QueryResultsViewComponent,
    MapboxViewComponent,
    MetricsViewComponent,
    ProjectsCollectionComponent,
    ProjectsMenuComponent,
    TemporalInspectorComponent,
    SpatialInspectorComponent,
    TemporalDetailComponent,
    SpatialDetailComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DisclaimerComponent,
    RangeSelectorComponent,
    ChartsComponent,
    StudyAreaComponent,
    RegimePickerComponent,
    BoxplotComponent,
    BatchReducerComponent,
    RawJsonViewComponent,
    FrappenatorControllerComponent,
    FrappenatorViewComponent,
    DatasetViewComponent,
    DatasetDetailViewComponent,
    ProjectCardComponent,
    PolarChartComponent,
    OverviewComponent,
    TimeBatchFilterPipe,
    TimeSeriesComponent,
    MatrixSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    jqxGridModule,
    jqxButtonModule,
    jqxRangeSelectorModule,
    jqxChartModule,
    jqxDropDownListModule,
    jqxSliderModule,
    SuiModule,
    BrowserAnimationsModule,
    DragDropModule,
    NvD3Module,
    AdministrationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only if true
    ),
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYW50aG9ueXJhd2xpbnN1b20iLCJhIjoiY2p5NmgzMG51MDRxbTNsbzZobGkwenF0dyJ9.fuJw4FNB6PXsiHEVwqaG6A' // Optionnal, can also be set per map (accessToken input of mgl-map)
      // geocoderAccessToken: 'TOKEN' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  providers: [
    ObservableDataService,
    MetricService,
    NthColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
