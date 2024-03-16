import { Component } from '@angular/core';
import { PessoaService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-pessoa',
  templateUrl: './adicionar-pessoa.component.html',
  styleUrls: ['./adicionar-pessoa.component.css']
})
export class AdicionarPessoaComponent {

    constructor(private service: PessoaService, private router: Router) { }

    ngOnInit(): void {
    }

    data: any

    form = new FormGroup({
      nome: new FormControl('', Validators.required),
      data_nasc: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      altura: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
    });

    adicionarPessoa() {
      this.data = this.form.value;
      this.service.adicionarPessoa(this.data).subscribe(data => {
        this.router.navigate(['/']);
      });
    }






}
