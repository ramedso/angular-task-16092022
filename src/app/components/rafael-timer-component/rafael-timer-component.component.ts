import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rafael-timer-component',
  templateUrl: './rafael-timer-component.component.html',
  styleUrls: ['./rafael-timer-component.component.css'],
})
export class RafaelTimerComponentComponent implements OnInit {
  counter = 0;

  timer = setInterval(() => {
    this.counter++;
  }, 1000);

  constructor() {}

  ngOnInit() {}

  getSeconds() {
    return this.timer;
  }
}
