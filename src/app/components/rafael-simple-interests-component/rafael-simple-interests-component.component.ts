import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rafael-simple-interests-component',
  templateUrl: './rafael-simple-interests-component.component.html',
  styleUrls: ['./rafael-simple-interests-component.component.css'],
})
export class RafaelSimpleInterestsComponentComponent implements OnInit {
  @Input() money: string;
  @Input() tax: string;
  @Input() months: string;

  getAmount() {
    return Number(this.money) * Number(this.tax) * Number(this.months);
  }

  constructor() {}

  ngOnInit() {}
}
