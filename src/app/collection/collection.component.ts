import { Component } from '@angular/core';
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {ActivatedRoute} from "@angular/router";
import {GummyService} from "../gummy.service";
import {BannerComponent} from "./components/banner/banner.component";
import {ProdutosComponent} from "./components/produtos/produtos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BannerComponent,
    ProdutosComponent,
    CommonModule
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  colecao: any;

  constructor(
      private route: ActivatedRoute,
      private gummyService: GummyService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productType = params.get('slug');

      if (productType) {
        this.gummyService.getColecao(productType).subscribe(data => {
          this.colecao = data;
        });
      }
    });
  }
}
