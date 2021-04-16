import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.scss'],
})
export class CarouselExampleComponent implements OnInit {
  constructor() {}

  public currentTimer: any;
  public currentInterval: any;
  public isMove = false;
  public images = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
    'assets/img/4.png',
  ];
  public current = 0;

  get next() {
    return this.current + 1 < this.images.length ? this.current + 1 : 0;
  }

  get film() {
    return [this.images[this.current], this.images[this.next]];
  }

  ngOnInit(): void {
    this.currentInterval = setInterval(() => this.carousel(), 2000);
  }

public toThisImage() {

}

  public mouseOver() {
    if (!this.isMove) {
      clearTimeout(this.currentTimer);
      clearInterval(this.currentInterval);
    }
  }

  public mouseOut() {
    if(!this.isMove) {
      this.currentInterval = setInterval(() => this.carousel(), 2000);
    }
  }

  public stopCarousel(index:number) {
    this.current = index;
    this.isMove = false;
  }

  private carousel() {
    this.isMove = true;
    this.currentTimer = setTimeout(() => {
      this.current =
        this.current + 1 < this.images.length ? this.current + 1 : 0;
      this.isMove = false;
    }, 1000);
  }



}
