import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pessoa } from 'src/app/Pessoa';

@Component({
  selector: 'app-modal-imc',
  templateUrl: './modal-imc.component.html',
  styleUrls: ['./modal-imc.component.css']
})
export class ModalImcComponent {
  pessoa: Pessoa;
  imc: number;
  status: string;

  constructor(
    public dialogRef: MatDialogRef<ModalImcComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.pessoa = data.pessoa;
    const { imc, status } = this.calcularIMC();
    this.imc = imc;
    this.status = status;
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  calcularIMC(): { imc: number, status: string } {
    let imc: number = 0;
    let status: string = '';

    if (this.pessoa.altura && this.pessoa.peso) {
      const alturaMetros = this.pessoa.altura / 100;
      imc = this.pessoa.peso / (alturaMetros * alturaMetros);

      if (imc < 18.5) {
        status = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        status = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        status = 'Sobrepeso';
      } else if (imc >= 30 && imc < 34.9) {
        status = 'Obesidade Grau I';
      } else if (imc >= 35 && imc < 39.9) {
        status = 'Obesidade Grau II (severa)';
      } else {
        status = 'Obesidade Grau III (mórbida)';
      }
    }

    return { imc, status };
  }

}
