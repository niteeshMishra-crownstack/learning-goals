import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapFormComponent } from './components/bootstrap-form/bootstrap-form.component';
import { RegularTableComponent } from './components/regular-table/regular-table.component';

const routes: Routes = [

  {
    path: 'regular-table', component: RegularTableComponent
  },
  {
    path: 'bootstrap-form', component: BootstrapFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
