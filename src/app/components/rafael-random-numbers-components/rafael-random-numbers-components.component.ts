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

  generateRandomNumbers(): number {
    return Math.floor(Math.random() * 1000);
  }

  getRandomNumbers() {
    return this.generateRandomNumbers();
  }
}
