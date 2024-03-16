import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarPessoaComponent } from './components/adicionar-pessoa/adicionar-pessoa.component';
import { AtualizarPessoaComponent } from './components/atualizar-pessoa/atualizar-pessoa.component';
import { ListarUserComponent } from './components/listar-pessoa/listar-pessoa.component';

const routes: Routes = [
  { path: '', component: ListarUserComponent },
  { path: 'adicionar', component: AdicionarPessoaComponent },
  { path: 'atualizar/:id', component: AtualizarPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
