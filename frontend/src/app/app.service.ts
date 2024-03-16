import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private url: string = 'http://localhost:8000/api/pessoas/';

  constructor(private http: HttpClient) { }

  adicionarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.url, pessoa);
  }

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }

  getPessoa(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.url}${id}`);
  }

  atualizarPessoa(id: number, user: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.url}${id}/`, user);
  }

  deletePessoa(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`${this.url}${id}/`);
  }

}
