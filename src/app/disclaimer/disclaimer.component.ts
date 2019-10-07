import { Component, OnInit } from '@angular/core';
import { DisclaimerService } from '../disclaimer.service';
import {TransitionController} from "ng2-semantic-ui";
import { Router } from '@angular/router';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {
  constructor(private disclaim: DisclaimerService,
  private router: Router) { }

  ngOnInit() {
  }

  alert(ev) {
    console.log(ev);
  }

  deny() {
    this.disclaim.decline();
  }

  approve() {
    this.disclaim.acknowledge();
  }

  public transitionController = new TransitionController();
}
