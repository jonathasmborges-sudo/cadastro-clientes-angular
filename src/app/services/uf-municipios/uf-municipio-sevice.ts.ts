import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Estado } from "../../models/estado";
import { Municipio } from "../../models/municipio";

@Injectable({
  providedIn: "root"
})
export class UfMunicipioServiceTsService {

  constructor(private http: HttpClient) {}

  listaUF(): Observable<Estado[]> {
    const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

    return this.http.get<Estado[]>(apiUrl);
  }

  listaMunicipios(idUf: number): Observable<Municipio[]> {
    const apiUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUf}/municipios`;

    return this.http.get<Municipio[]>(apiUrl);
  }
}