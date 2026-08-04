import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [];

  pesquisar(nome: string = ''): Cliente[] {
    if (!nome.trim()) {
      return this.clientes;
    }
    return this.clientes.filter(c => 
      c.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  obterPorId(id: string): Cliente | undefined {
    return this.clientes.find(c => c.id === id);
  }

  salvar(cliente: Cliente): void {
    if (cliente.id) {
      const index = this.clientes.findIndex(c => c.id === cliente.id);
      if (index !== -1) {
        this.clientes[index] = { ...cliente };
      }
    } else {
      cliente.id = crypto.randomUUID();
      this.clientes.push({ ...cliente });
    }
  }

  excluir(id: string): void {
    this.clientes = this.clientes.filter(c => c.id !== id);
  }
}