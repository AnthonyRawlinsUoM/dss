import { Component, OnInit } from '@angular/core';
import { SessionLogService } from '../session-log.service';


@Component({
  selector: 'app-log-viewer',
  templateUrl: './log-viewer.component.html',
  styleUrls: ['./log-viewer.component.css']
})
export class LogViewerComponent implements OnInit {

  private log: string[] = [];

  constructor(private logService: SessionLogService) { }

  ngOnInit() {
    this.logService.getLog().subscribe((entry: string) => {
      this.log.push(entry);
    });
  }
  
  truncate() {
      this.log = [];
  }

}
