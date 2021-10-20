import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./template/principal/principal.component";
import {ListarSimbolosComponent} from "./listar-simbolos/listar-simbolos.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'listar-simbolos', component: ListarSimbolosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
