import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-date-example',
  templateUrl: './date-example.component.html',
  styleUrls: ['./date-example.component.scss'],
})
export class DateExampleComponent implements OnInit {
  constructor() {}

  public format: string = '';

  get today(): Date {
    return new Date('2021-02-11');
  }

  ngOnInit(): void {
    console.log( new Date(moment(this.today).toISOString()));
  }
}
