import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './Pages/edit/edit.component';
import { ExportComponent } from './Pages/export/export.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'edit' },
  { path: 'edit', component: EditComponent },
  { path: 'export', component: ExportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsvtoJsonRoutingModule { }
