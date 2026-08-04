import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../../servicos/cliente';
import { Cliente } from '../../modelos/cliente';

@Component({
  selector: 'app-consulta',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css'
})
export class Consulta implements OnInit {
  clientes: Cliente[] = [];
  termoBusca: string = '';

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clientes = this.clienteService.pesquisar(this.termoBusca);
  }

  excluir(id?: string): void {
    if (id && confirm('Deseja realmente excluir este cliente?')) {
      this.clienteService.excluir(id);
      this.carregarClientes();
    }
  }
}