import { Component } from '@angular/core';
import { PessoaService } from '../../app.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalImcComponent } from '../modal-imc/modal-imc.component';
import { Pessoa } from 'src/app/Pessoa';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarUserComponent {
  pessoas: any | undefined;
  altura: number = 0;
  peso: number = 0;
  imc: number = 0;

  pesquisa: string = '';

  constructor(private pessoaService: PessoaService,  private datePipe: DatePipe, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.pessoaService.getPessoas().subscribe(data => {
      this.pessoas = data;
      console.log(data)
    });
  }

  deletePessoa(id: number) {
    this.pessoaService.deletePessoa(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  filtrarPessoas(): Pessoa[] {
    return this.pessoas.filter((pessoa: { nome: string; data_nasc: string; cpf: string; sexo: string; }) =>
      pessoa.nome.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
      pessoa.data_nasc.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
      pessoa.cpf.toLowerCase().includes(this.pesquisa.toLowerCase()) ||
      pessoa.sexo.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }

  formatarData(data: string): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy') || '';
  }

  formatarCPF(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  openModal(pessoa: Pessoa) {
    this.dialog.open(ModalImcComponent, {
      data: {
        pessoa: pessoa
      }
    });
  }
}
