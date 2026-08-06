import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PessoaService } from '../../service/pessoa-service';
import { Pessoa } from '../../models/pessoa';
import { formatarCPF, formatarDataBR } from '../../utils/formatters';

@Component({
  selector: 'app-consulta',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css'
})
export class Consulta implements OnInit {
  clientes: Pessoa[] = [];
  termoBusca: string = '';

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clientes = this.pessoaService.pesquisar(this.termoBusca);
  }

  excluir(id?: string): void {
    if (id && confirm('Deseja realmente excluir este cliente?')) {
      this.pessoaService.excluir(id);
      this.carregarClientes();
    }
  }

  formatarCPF(cpf: string): string {
    return formatarCPF(cpf);
  }

  formatarDataBR(data: string): string {
    return formatarDataBR(data);
  }
}