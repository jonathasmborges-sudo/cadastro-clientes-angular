import { Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private pessoas: Pessoa[] = [];

  pesquisar(nome: string = ''): Pessoa[] {
    if (!nome.trim()) {
      return this.pessoas;
    }
    return this.pessoas.filter(p => 
      p.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  obterPorId(id: string): Pessoa | undefined {
    return this.pessoas.find(p => p.id === id);
  }

  salvar(pessoa: Pessoa): void {
    if (pessoa.id) {
      const index = this.pessoas.findIndex(p => p.id === pessoa.id);
      if (index !== -1) {
        this.pessoas[index] = { ...pessoa };
      }
    } else {
      pessoa.id = crypto.randomUUID();
      this.pessoas.push({ ...pessoa });
    }
  }

  excluir(id: string): void {
    this.pessoas = this.pessoas.filter(p => p.id !== id);
  }
}