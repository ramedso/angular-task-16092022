import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rafael-random-numbers-components',
  templateUrl: './rafael-random-numbers-components.component.html',
  styleUrls: ['./rafael-random-numbers-components.component.css'],
})
export class RafaelRandomNumbersComponentsComponent implements OnInit {
  @Input() n1: string;

  counter = 0;

  constructor() {}

  ngOnInit() {}

  getRandomNumbers() {
    while (this.counter <= Number(this.n1)) {
      const para = document.createElement('p');
      const node = document.createTextNode(Math.random().toString());
      para.appendChild(node);
    }
    this.counter++;

}
