import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rafael-random-numbers-components',
  templateUrl: './rafael-random-numbers-components.component.html',
  styleUrls: ['./rafael-random-numbers-components.component.css'],
})
export class RafaelRandomNumbersComponentsComponent implements OnInit {
  @Input() n1: string;

  constructor() {}

  ngOnInit() {}

  getRandomNumbers() {
    var counter = 0;

    while(counter <= Number(this.n1)){
      return Math.random();
      counter++;
    }
  }
}
