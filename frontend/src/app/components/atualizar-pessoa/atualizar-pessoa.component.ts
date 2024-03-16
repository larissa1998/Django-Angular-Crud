import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from 'src/app/app.service';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css']
})
export class AtualizarPessoaComponent {

  pessoas?: any
  data: any


  constructor(private service: PessoaService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getPessoa(id).subscribe(data => {
      this.pessoas = data
      console.log(this.pessoas)
    })
  }

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    data_nasc: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    altura: new FormControl('', Validators.required),
    peso: new FormControl('', Validators.required)
  })

  submit(){
    this.data = this.form.value
    this.pessoas.nome = this.data.nome
    this.pessoas.data_nasc = this.data.data_nasc
    this.pessoas.cpf = this.data.cpf
    this.pessoas.sexo = this.data.sexo
    this.pessoas.altura = this.data.altura
    this.pessoas.peso = this.data.peso

    console.log(this.data)

    this.service.atualizarPessoa(this.pessoas?.id, this.pessoas).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
