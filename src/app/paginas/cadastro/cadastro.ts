import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { PessoaService } from '../../service/pessoa-service';
import { Pessoa } from '../../model/pessoa';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro implements OnInit {
  cliente: Pessoa = {
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    uf: '',
    municipio: ''
  };

  modoEdicao = false;

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const clienteEncontrado = this.pessoaService.obterPorId(id);
      if (clienteEncontrado) {
        this.cliente = { ...clienteEncontrado };
        this.modoEdicao = true;
      }
    }
  }

  salvar(): void {
    this.pessoaService.salvar(this.cliente);
    this.router.navigate(['/consulta']);
  }
}