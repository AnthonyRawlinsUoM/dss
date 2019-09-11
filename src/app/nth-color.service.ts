import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class NthColorService {

  // private url = 'http://128.250.160.167:5050';
  // private url = 'localhost:5050';
  private url = 'https://dss.cloud.bushfirebehaviour.net.au:5050';
  private socket;
  // Example call http://localhost:8765/nmap?start=0&finish=5&cmap=VIRIDIS

  constructor() {
    // this.socket = io(this.url, {
    //   transports: ['websocket']
    // });
    this.socket = io(this.url);
  }

  // public getViridisColors(start: number, finish: number) {
  //   console.log('Calling for Viridis color range now: ' + start + ', ' + finish + '.');
  //   return this.http.get(`${this.url}/nmap?start=${start}&finish=${finish}&cmap=VIRIDIS`);
  // }

  public getViridisColors(start: number, finish: number) {

    console.log('Calling for Viridis color range now: ' + start + ', ' + finish + '.');
    this.socket.emit('nth-color', { start: start, finish: finish, cmap: 'VIRIDIS' });

    return Observable.create((observer) => {
      this.socket.on('color-map', (data) => {
        observer.next(data);
      });
    });
  }
}
