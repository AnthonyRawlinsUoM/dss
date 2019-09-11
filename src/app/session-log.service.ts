import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SessionLogService {

  // private url = 'http://128.250.160.167:5050';
  private url = 'localhost:5050';
  private socket;

  constructor() {
    this.socket = io(this.url, {
      transports: ['websocket']
    });
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
}
