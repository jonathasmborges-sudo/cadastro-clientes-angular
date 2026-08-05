import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Cadastro } from './paginas/cadastro/cadastro';
import { Consulta } from './paginas/consulta/consulta';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cadastro', component: Cadastro },
  { path: 'editar/:id', component: Cadastro },
  { path: 'consulta', component: Consulta }
];