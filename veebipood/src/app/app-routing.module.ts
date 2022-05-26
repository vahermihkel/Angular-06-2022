import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';

const routes: Routes = [
  // localhost:4200/ --> avaleht/ avaleht.component.html
  { path: "", component: AvalehtComponent },
  // localhost:4200/ostukorv --> ostukorv/ ostukorv.component.html
  { path: "ostukorv", component: OstukorvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
