import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarPessoaComponent } from './components/adicionar-pessoa/adicionar-pessoa.component';
import { AtualizarPessoaComponent } from './components/atualizar-pessoa/atualizar-pessoa.component';
import { ListarUserComponent } from './components/listar-pessoa/listar-pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ModalImcComponent } from './components/modal-imc/modal-imc.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarPessoaComponent,
    AtualizarPessoaComponent,
    ListarUserComponent,
    ModalImcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
