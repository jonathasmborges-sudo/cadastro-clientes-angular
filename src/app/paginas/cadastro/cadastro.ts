import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ClienteService } from '../../servicos/cliente';
import { Cliente } from '../../modelos/cliente';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro implements OnInit {
  cliente: Cliente = {
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    uf: '',
    municipio: ''
  };

  modoEdicao = false;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const clienteEncontrado = this.clienteService.obterPorId(id);
      if (clienteEncontrado) {
        this.cliente = { ...clienteEncontrado };
        this.modoEdicao = true;
      }
    }
  }

  salvar(): void {
    this.clienteService.salvar(this.cliente);
    this.router.navigate(['/consulta']);
  }
}