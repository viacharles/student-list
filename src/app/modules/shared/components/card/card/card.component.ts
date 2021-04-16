import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { fromEvent, of, ReplaySubject, Subscription } from 'rxjs';
import { filter, map, mergeMap, take, tap } from 'rxjs/operators';

interface IStartPoint {
  x: number;
  touchX: number;
}

@Component({
  selector: 'appTouchMove',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  @ViewChild('test') test: ElementRef | null = null;
  @Output() cardChanged: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private render: Renderer2, elem:ElementRef) {
    elem
  }

  public subscription: Subscription = new Subscription();

  private startPoint = new ReplaySubject<IStartPoint>(1);
  private startPoint$ = this.startPoint.asObservable();
  private isAnimation: boolean = false;
  

  ngOnInit() {}

  ngAfterViewInit() {
    this.subscription.add(
      this.touchStart$(this.test?.nativeElement).subscribe()
    );
    this.subscription.add(this.touchEnd$(this.test?.nativeElement).subscribe());
    this.subscription.add(
      this.touchMove$(this.test?.nativeElement).subscribe()
    );
  }

  private touchStart$ = (element: HTMLElement) =>
    fromEvent(element, 'touchstart').pipe(
      filter((_) => !this.isAnimation),
      map((event: any) => this.onTouch(event, element)),
      tap((startInfo) => this.startPoint.next(startInfo))
    );

  public touchMove$ = (element: HTMLElement) =>
    fromEvent(element, 'touchmove').pipe(
      filter((_) => !this.isAnimation),
      tap((event: any) => this.onMove(element, event))
    );

  private touchEnd$ = (element: HTMLElement) =>
    fromEvent(element, 'touchend').pipe(
      filter((_) => !this.isAnimation),
      mergeMap(
        () => this.startPoint$.pipe(take(1)),
        (endEvent: any, startPoint) => ({
          endX: endEvent.changedTouches[0].clientX,
          startPoint,
        })
      ),
      tap((_) => this.onLeave(_))
    );

  private onMove = (element: HTMLElement, event: TouchEvent) =>
    this.render.setStyle(
      element,
      'left',
      `${event.changedTouches[0].clientX}px`
    );

  private onTouch = (event: TouchEvent, element: HTMLElement) => ({
    touchX: event.touches[0].clientX,
    x:
      element.getBoundingClientRect().x +
      element.getBoundingClientRect().width / 2,
  });

  private onLeave = ({
    endX,
    startPoint,
  }: {
    endX: any;
    startPoint: IStartPoint;
  }) => {
    Math.abs(endX - startPoint.touchX) > 150
      ? this.fadeout(endX - startPoint.touchX > 0)
      : this.backStartPoint(startPoint);
  };

  private fadeout(isRight: boolean) {
    this.isAnimation = true;
    this.render.addClass(this.test?.nativeElement, isRight ? 'fadeout-right' : 'fadeout-left');
    this.cardChanged.emit(isRight);
    setTimeout(() => {
      this.isAnimation = false;
    }, 1000);
  }

  private backStartPoint(startPoint: IStartPoint) {
    this.isAnimation = true;
    this.render.setStyle(this.test?.nativeElement, 'left', `${startPoint.x}px`);
    this.render.setStyle(this.test?.nativeElement, 'transition', '0.7s');
    setTimeout(() => {
      this.render.removeStyle(this.test?.nativeElement, 'transition');
      this.isAnimation = false;
    }, 1000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*
  // @ViewChild('test') test: ElementRef | null = null;
  // constructor(private render: Renderer2) {}

  // private subscription: Subscription = new Subscription;
  // private replaySubject: ReplaySubject<TouchEvent> = new ReplaySubject(1);

  // ngOnInit() {}
  // ngAfterViewInit() {
  //   console.log(this.test);
  //   this.subscription
  //   .add(this.touchMove$(this.test?.nativeElement).subscribe())
  //   .add(this.touchStart$(this.test?.nativeElement).subscribe())
  //   .add(this.touchEnd$(this.test?.nativeElement).subscribe())
  // }
  // private forConsole$ = (element:Element) => fromEvent(element,'touchstart').pipe((e:TouchEvent) => console.log(e));

  // private touchStart$ = (element:HTMLElement) => fromEvent(element,'touchstart').pipe (
  //   map((event:any)=> this.getPointObj(element, event))
  //   tap((PointInfo) => )
  // )

  // private touchMove$ = (element:HTMLElement) => fromEvent(element, "touchmove").pipe(
  //  tap((event:any) => this.render.setStyle(element, "left", `${event.touches[0].clientX }px`))
  // )

  // private touchEnd$ = (element:HTMLElement) => fromEvent(element, 'touchend').pipe(
  // map((event:any) => this.getPointObj(element, event))
  // mergeMap(source => this.firstTouch )
  // )

  // private detectMoveDistance = () {

  // }

  // private getPointObj = (element: HTMLElement, event: TouchEvent) => ({
  //   startPointX: event.touches[0].clientX,
  //   x: element.getBoundingClientRect().x
  //   })
  */
}
