import { Output, Component, AfterViewInit, ViewChild, ElementRef, EventEmitter, OnInit, Input } from '@angular/core';
import { Map, FitBoundsOptions } from 'mapbox-gl';
import studyarea from '../../../assets/boundaries/studyarea.json';

@Component({
    selector: 'app-mapbox-view',
    templateUrl: './mapbox-view.component.html',
    styleUrls: ['./mapbox-view.component.css']
})
export class MapboxViewComponent implements OnInit {

    @ViewChild('mapview', { static: false }) mapview: Map;

    studyarea: any = { "type": "FeatureCollection", "features": [] };

    constructor() { }

    ngOnInit() {
        this.studyarea = studyarea;
    }

}
