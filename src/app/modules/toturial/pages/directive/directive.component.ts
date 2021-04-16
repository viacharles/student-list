import { Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

@ViewChild('tbutton') button?: ElementRef;

  constructor() {
  }
  public words:string = '';
  public inputWords:string = '';

  ngOnInit(): void {
  }



  }
