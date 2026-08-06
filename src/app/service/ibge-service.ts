import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EstadoIBGE {
  id: number;
  sigla: string;
  nome: string;
}

export interface MunicipioIBGE {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class IbgeService {
  private baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades';

  constructor(private http: HttpClient) {}

  listarEstados(): Observable<EstadoIBGE[]> {
    return this.http.get<EstadoIBGE[]>(`${this.baseUrl}/estados?orderBy=nome`);
  }

  listarMunicipios(uf: string): Observable<MunicipioIBGE[]> {
    return this.http.get<MunicipioIBGE[]>(`${this.baseUrl}/estados/${uf}/municipios?orderBy=nome`);
  }
}