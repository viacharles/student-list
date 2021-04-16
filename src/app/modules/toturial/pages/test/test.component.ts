import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('factorial',this.factorial2(5));
  }

// public Point(x,y) {
//   this.x * this.y
// }

  public factorial(n:number) {
    let product = 1;
    while ( n > 1) {
      product *= n ;
      n-- ;
      console.log(product);
    }
    return product;
  }

  public factorial2(n:number) {
    let product = 1;
    for(let i=2; i < n; i++) {
      product *= i;
    console.log(product);
    }
    return product;
  }

}
