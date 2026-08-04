import { Routes } from '@angular/router';
import { Cadastro } from './paginas/cadastro/cadastro';
import { Consulta } from './paginas/consulta/consulta';

export const routes: Routes = [
  { path: '', redirectTo: 'consulta', pathMatch: 'full' },
  { path: 'cadastro', component: Cadastro },
  { path: 'editar/:id', component: Cadastro },
  { path: 'consulta', component: Consulta }
];