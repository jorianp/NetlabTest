import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: FormComponent, children: [
      {path: 'edit', component: EditComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
