import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHideWords]'
})
export class HideWordsDirective implements OnInit , OnChanges{

  @Input() appHideWords = '';

  constructor(
    private element: ElementRef,
    private render:Renderer2
  ) {

   }



   ngOnInit(): void {
   }

   ngOnChanges(changes:SimpleChanges) {

if('appHideWords' in changes &&
!changes.appHideWords?.firstChange ){
  if(changes.appHideWords.currentValue.length >= 6){
    this.element.nativeElement.innerText =  '';
}else {
  this.element.nativeElement.innerText =  `${changes.appHideWords.currentValue}` ;
}


}

//     this.element.nativeElement.innerText =
// if(this.element.nativeElement.innerText.length >= 6 ){

}
  //  }

  //  detectWordsAndHide(event:any){
  //   console.log(event,this.element?.nativeElement.innerText.length);
  //   // this.render.setStyle(this.element?.nativeElement, 'color', this.element?.nativeElement.innerText.length >= 6, 'rgba(0,0,0,0,0)')
  //   if(event.target.innerText.length >= 6 ){
  //     this.render.setValue(this.element?.nativeElement, '');
  //   }
  // }

}
