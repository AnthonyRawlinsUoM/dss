import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

import { Task } from './task';
import { SpatioTemporalQuery } from './spatio-temporal-query';

@Injectable({
  providedIn: 'root'
})
export class ObservableDataService {

  // private url = 'http://128.250.160.167:5050';
  // private url = 'localhost:5050';
  private url = 'https://dss.cloud.bushfirebehaviour.net.au:5050';
  private socket;

  constructor() {
    // this.socket = io(this.url, {
    //   transports: ['websocket']
    // });
    this.socket = io(this.url);
  }

  public requestData() { }

  public getData = () => {
    return Observable.create((observer) => {
      this.socket.on('data', (data) => {
        observer.next(data);
      });
    });
  }

  public submitQuery(query: SpatioTemporalQuery) {
    this.socket.emit('submit-query', query);
  }

  public submitTask(task: Task) {
    this.socket.emit('submit-task', task);
  }

  public getTasks = () => {
    return Observable.create((observer) => {
      this.socket.on('task-queued', (task) => {
        observer.next(task);
      });

      this.socket.on('purge-complete', () => {
        observer.next();
      });
    });
  }

  public getTaskEvents = () => {
    return Observable.create((observer) => {
      this.socket.on('task-events', (task) => {
        console.log('TaskEvent:' + task);
        observer.next(task);
      });
    });
  }

  public revokeTask(task: Task) {
    this.socket.emit('task-revoke', task);
  }

  public purge() {
    this.socket.emit('purge', {});
  }

  public getQueries = () => {
    return Observable.create((observer) => {
      this.socket.on('query-queued', (query) => {
        observer.next(query);
      });
    });
  }

  public getResults = () => {
    return Observable.create((observer) => {
      this.socket.on('query-results', (query_results) => {
        observer.next(query_results);
      });
    });
  }

  public getPartialResults = () => {
    return Observable.create((observer) => {
      this.socket.on('query-partial-results', (query_partial_results) => {
        observer.next(query_partial_results);
      });
    });
  }

  public getQueryEvents = () => {
    return Observable.create((observer) => {
      this.socket.on('query-event', (data) => {
        observer.next(data);
      });
    });
  }

  public getFrappenatorOutput = () => {
    console.log('Requesting listing of Projects.');
    this.socket.emit('list_datapath', {});
    return Observable.create((observer) => {
      console.log('Got listing back.');

      this.socket.on('datapath_list', (data) => {
        console.log(data);
        observer.next(data);
      });
    });
  }

  public getProjectMetrics = () => {
    this.socket.emit('list_project_metrics', {});
    return Observable.create((observer) => {
      this.socket.on('project_metrics_list', (data) => {
        observer.next(data);
      });
    });
  }

  public getSpatialList = () => {
    this.socket.emit('list_spatial', {});
    return Observable.create((observer) => {
      this.socket.on('spatial_list', (data) => {
        console.log(data);
        observer.next(data);
      });
    });
  }

  public getTemporalList = () => {
    this.socket.emit('list_temporal', {});
    return Observable.create((observer) => {
      this.socket.on('temporal_list', (data) => {
        console.log(data);
        observer.next(data);
      });
    });
  }

  public getTimeSeries(query) {
    this.socket.emit('time-series', query);
    return Observable.create((observer) => {
      this.socket.on('time-series-results', (data) => {
        console.log(data);
        observer.next(data);
      });
    });
  }

  public getFrappeProject(id) {
    this.socket.emit('frappe_dss', { 'name': id });
    return Observable.create((observer) => {
      this.socket.on('dss_frappe', (data) => {
        console.log(data);
        observer.next(data);
      });
    });
  }


  public revokeQuery(query: SpatioTemporalQuery) {
    this.socket.emit('query-revoke', query);
  }

  public log(ev) {
    this.socket.emit('log-entry', ev);
  }

  public getLog = () => {
    return Observable.create((observer) => {
      this.socket.on('log', (entry) => {
        observer.next(entry);
      });
    });
  }

  public getProgress(uuid) {
    this.socket.emit('task-progress-request', uuid);

    return Observable.create((observer) => {
      this.socket.on('task-progress', (p) => {
        observer.next(p);
      });
    });
  }

  public getSummary(summary_query) {
    console.log(summary_query);

    this.socket.emit('frappe_results', summary_query);

    return Observable.create((observer) => {
      this.socket.on('results_frappe', (data) => {
        observer.next(data);
      });
    });
  }
}
