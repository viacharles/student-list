import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToturialRoutingModule } from './toturial-routing.module';
import { CarouselExampleComponent } from './pages/carousel-example/carousel-example.component';
import { DateExampleComponent } from './pages/date-example/date-example.component';
import { ReactiveFormsExampleComponent } from './pages/reactive-forms-example/reactive-forms-example.component';
import { ShareModule } from '../shared/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './pages/directive/directive.component';
import { DirectiveModule } from '../shared/directive/directive.module';
import { TouchmoveComponent } from './pages/touchmove/touchmove.component';
import { RxjsPracticeComponent } from './pages/rxjs-practice/rxjs-practice.component';
import { TestComponent } from './pages/test/test.component';
import { CsvtoJsonModule } from './pages/csvto-json/csvto-json.module';



@NgModule({
  declarations: [
    CarouselExampleComponent,
    DateExampleComponent,
    ReactiveFormsExampleComponent,
    DirectiveComponent, TouchmoveComponent, RxjsPracticeComponent, TestComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToturialRoutingModule,
    DirectiveModule,
    ShareModule,
  ]
})
export class ToturialModule { }
