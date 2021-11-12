import { ClienteComponent } from './view/cliente/cliente.component';
import { EnderecoComponent } from './view/endereco/endereco.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'endereco',
    component:EnderecoComponent
  },
  {
    path:'cliente',
    component: ClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
