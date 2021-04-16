import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideWordsDirective } from './hide-words.directive';
import { TouchMoveDirective } from './touch-move.directive';



@NgModule({
  declarations: [HideWordsDirective, TouchMoveDirective],
  imports: [
    CommonModule
  ],
  exports: [
    HideWordsDirective
  ]
})
export class DirectiveModule { }
