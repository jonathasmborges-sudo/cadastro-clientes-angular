import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { PessoaService } from '../../service/pessoa-service';
import { IbgeService, EstadoIBGE, MunicipioIBGE } from '../../service/ibge-service';
import { Pessoa } from '../../models/pessoa';
import { formatarCPF } from '../../utils/formatters';

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
  estados: EstadoIBGE[] = [];
  municipios: MunicipioIBGE[] = [];

  constructor(
    private pessoaService: PessoaService,
    private ibgeService: IbgeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.carregarEstados();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const clienteEncontrado = this.pessoaService.obterPorId(id);
      if (clienteEncontrado) {
        this.cliente = { ...clienteEncontrado };
        this.modoEdicao = true;
        if (this.cliente.uf) {
          this.carregarMunicipios(this.cliente.uf);
        }
      }
    }
  }

  carregarEstados(): void {
    this.ibgeService.listarEstados().subscribe(dados => {
      this.estados = dados;
    });
  }

  aoMudarUf(): void {
    if (this.cliente.uf) {
      this.carregarMunicipios(this.cliente.uf);
    } else {
      this.municipios = [];
    }
    this.cliente.municipio = '';
  }

  carregarMunicipios(uf: string): void {
    this.ibgeService.listarMunicipios(uf).subscribe(dados => {
      this.municipios = dados;
    });
  }

  aoMudarCpf(): void {
    this.cliente.cpf = formatarCPF(this.cliente.cpf);
  }

  salvar(): void {
    this.pessoaService.salvar(this.cliente);
    this.router.navigate(['/consulta']);
  }
}