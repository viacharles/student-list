import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-touchmove',
  templateUrl: './touchmove.component.html',
  styleUrls: ['./touchmove.component.scss'],
})
export class TouchmoveComponent implements OnInit {
  constructor() {}

  public isRight:boolean = false;
  ngOnInit(){}

  public onCardChange() {
    
  }
}
