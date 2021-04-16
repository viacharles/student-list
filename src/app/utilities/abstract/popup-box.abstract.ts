import { Injectable } from '@angular/core';

@Injectable()
export abstract class PopupBox {
  constructor() {}

  public isOpen: boolean = false;
  private menu: any;
  private e = this.detectWindowClick.bind(this);

  public expand(menu: any, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.menu = menu;
    this.isOpen = true;
    window.addEventListener('click',this.e);
  }

  public collapse() {
      this.isOpen = false;
      window.removeEventListener('click',this.e);
  }

  private detectWindowClick(parms:any){
    if(!this.menu.contains(parms.target)) {
        this.collapse();
    }
  }
}
