import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { LisaKeskusComponent } from './lisa-keskus/lisa-keskus.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PoedComponent } from './poed/poed.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';

const routes: Routes = [
  // localhost:4200/ --> avaleht/ avaleht.component.html
  { path: "", component: KodulehtComponent },
  { path: "soendus", component: AvalehtComponent },
  // localhost:4200/ostukorv --> ostukorv/ ostukorv.component.html
  { path: "ostukorv", component: OstukorvComponent },
  { path: "lisa-toode", component: LisaToodeComponent },
  { path: "poed", component: PoedComponent },
  { path: "toode/:nimi", component: YksikToodeComponent },
  { path: "lisa-keskus", component: LisaKeskusComponent },
  { path: "muuda/:nimi", component: MuudaToodeComponent },
  { path: "halda-tooteid", component: HaldaTooteidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
