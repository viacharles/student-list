import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentPageComponent } from './modules/student-page/student-page.component';
import { AdminPageComponent } from './modules/admin-page/admin-page.component';
import { NavComponent } from './modules/shared/components/nav/nav.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    AdminPageComponent,
    NavComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
