import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvtoJsonRoutingModule } from './csvto-json-routing.module';
import { EditComponent } from './Pages/edit/edit.component';
import { ExportComponent } from './Pages/export/export.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { CSVtoJSONComponent } from './csvto-json.component';


@NgModule({
  declarations: [EditComponent, ExportComponent, AsideBarComponent,CSVtoJSONComponent],
  imports: [
    CommonModule,
    CsvtoJsonRoutingModule
  ]
})
export class CsvtoJsonModule { }
