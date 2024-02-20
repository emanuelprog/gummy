import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GummyService {

  constructor(private http: HttpClient) { }

  getColecoes(): Observable<any[]> {
    return this.http.get<any[]>('/assets/colecoes.json');
  }

  getColecao(colecao?: string): Observable<any> {
    return this.http.get<any[]>('/assets/colecoes.json').pipe(
        map(colecoes => colecao ? colecoes.find(c => c.slug === colecao) : null)
    );
  }

  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>('/assets/produtos.json');
  }
}
