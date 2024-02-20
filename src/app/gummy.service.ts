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

  getProdutos(colecao?: string): Observable<any[]> {
    return this.http.get<any[]>('/assets/produtos.json').pipe(
      map(produtos =>
        colecao ? produtos.filter(produto =>
          produto.collections.includes(colecao))
          : produtos
      )
    );
  }

  getImagensProdutos(): Observable<any[]> {
    return this.http.get<any[]>('/assets/imagens-produtos.json');
  }

  getQueridinhos(): Observable<any[]> {
    return this.http.get<any[]>('/assets/queridinhos.json');
  }
  getThumbnailsImagensProdutos(): Observable<any[]> {
    return this.http.get<any[]>('/assets/imagens-produtos-thumb.json');
  }
}
