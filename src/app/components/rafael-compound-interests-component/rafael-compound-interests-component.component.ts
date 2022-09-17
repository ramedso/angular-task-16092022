import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rafael-compound-interests-component',
  templateUrl: './rafael-compound-interests-component.component.html',
  styleUrls: ['./rafael-compound-interests-component.component.css'],
})
export class RafaelCompoundInterestsComponentComponent implements OnInit {
  @Input() money: string;
  @Input() tax: string;
  @Input() months: string;

  getAmount() {
    return Number(this.money) * (1 + Number(this.tax)) ** Number(this.months);
  }
  constructor() {}

  ngOnInit() {}
}
