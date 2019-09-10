import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MetricService {

  // private url = 'http://128.250.160.167:5050';
  private url = 'https://dss.cloud.bushfirebehaviour.net.au:5050';

  private socket;

  constructor() {
    this.socket = io(this.url, {
      transports: ['websocket']
    });
  }

  public getMetric(project: string) {

    this.socket.emit('metrics', {project: project});
    console.log('Calling for metrics');

    return Observable.create((observer) => {
      this.socket.on('all-metrics', (data) => {
        console.log('Metrics Service got data: ' + data);
        observer.next(data);
      });
    });
  }
}
