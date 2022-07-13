import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {DetailComponent} from "./detail/detail.component";
import {CreateComponent} from "./create/create.component";
import {DeleteComponent} from "./delete/delete.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'detail-tour/:id',
    component: DetailComponent
  },
  {
    path: 'delete-tour/:id',
    component: DeleteComponent
  },
  {
    path: 'edit-tour/:id',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
