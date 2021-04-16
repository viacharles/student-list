import { Component, OnInit } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.scss']
})
export class RxjsPracticeComponent implements OnInit {

  constructor() { }

  // public items = [1, 2, 3, 4, 5, 6, 7];
  // public ob =  (...this.items);
  // ngOnInit(): void {
  //   console.log(...this.items)
  //   this.ob
  //   .pipe(
  //     filter(v => v % 2 == 0)
  //   )
  //   .subscribe( v => console.log(v))
  // }

  // public ob = fromEvent(document, 'click');

  //   ngOnInit(): void {
  //     this.ob
  //     .pipe(
  //     )
  //     .subscribe( v => console.log(v))
  //     }
  public ob = from(fetch('data.json'))

  ngOnInit(): void {
    this.ob
    .pipe()
    .subscribe((v: Response) => {
      let ob2 = from(v.json())
      ob2.subscribe(v =>  console.log(v))

    }
    )
        }


}
