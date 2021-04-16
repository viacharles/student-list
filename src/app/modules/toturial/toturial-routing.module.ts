import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CarouselExampleComponent } from './pages/carousel-example/carousel-example.component';
import { DateExampleComponent } from './pages/date-example/date-example.component';
import { DirectiveComponent } from './pages/directive/directive.component';
import { ReactiveFormsExampleComponent } from './pages/reactive-forms-example/reactive-forms-example.component';
import { TouchmoveComponent } from './pages/touchmove/touchmove.component';
import { RxjsPracticeComponent } from './pages/rxjs-practice/rxjs-practice.component';
import { TestComponent } from './pages/test/test.component';
import { CsvtoJsonModule } from './pages/csvto-json/csvto-json.module';
import { CSVtoJSONComponent } from './pages/csvto-json/csvto-json.component';

const routes: Routes = [
  { path: '', redirectTo: 'csv-to-json' },
  {
    path: 'carousel',
    component: CarouselExampleComponent,
  },
  {
    path: 'date',
    component: DateExampleComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormsExampleComponent,
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
  {
    path: 'touchmove',
    component: TouchmoveComponent,
  },
  {
    path: 'rxjs-practice',
    component: RxjsPracticeComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
        path: 'csv-to-json',
        component: CSVtoJSONComponent,
        loadChildren: () =>
          import('./pages/csvto-json/csvto-json.module').then(
            (m) => m.CsvtoJsonModule
          ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToturialRoutingModule {}
