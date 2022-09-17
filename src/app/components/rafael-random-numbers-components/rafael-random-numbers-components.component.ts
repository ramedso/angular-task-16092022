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

  generateRandomNumbers() {
    let arr = Array.from({ length: Number(this.n1) }, () =>
      Math.floor(Math.random() * 100)
    );

    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }

    const para = document.createElement('p');
    para.innerText = 'RESULT AT THE CONSOLE!';
    document.body.appendChild(para);
  }
}
