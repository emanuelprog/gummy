import { Component, Input } from '@angular/core';
import { BreadcrumbComponent } from '../collection/components/breadcrumb/breadcrumb.component';
import { CommonModule, NgForOf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GummyService } from '../gummy.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ResultadosComponent } from '../home/components/resultados/resultados.component';
import { IconesComponent } from '../home/components/icones/icones.component';
import { CelebridadesComponent } from '../home/components/celebridades/celebridades.component';
import { GummyComponent } from '../home/components/gummy/gummy.component';
import { DuvidasComponent } from '../home/components/duvidas/duvidas.component';
import { ComunidadeComponent } from '../comunidade/comunidade.component';
import { IconesPrincipalComponent } from '../home/components/icones-principal/icones-principal.component';
import { BannersPrincipalComponent } from '../home/components/banners-principal/banners-principal.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    BreadcrumbComponent, 
    CommonModule, 
    RouterLink, 
    SlickCarouselModule,
    NgForOf,
    ResultadosComponent,
    IconesComponent,
    CelebridadesComponent,
    GummyComponent,
    DuvidasComponent,
    ComunidadeComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  constructor(
    private route: ActivatedRoute,
    private gummyService: GummyService
    ) {}
    
  imagens: any[] = [];
  thumbnails: any[] = [];
  @Input() colecao!: any;
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productType = params.get('slug');

      if (productType) {
        this.gummyService.getColecao(productType).subscribe(data => {
          this.colecao = data;
        });
        this.gummyService.getImagensProdutos().subscribe(dados => {
          this.imagens = dados;
        });
        this.gummyService.getThumbnailsImagensProdutos().subscribe(dados => {
          this.thumbnails = dados;
        });
      }
    });
  }
  slideConfig = {
    arrows: !1,
    dots: !0,
    autoplay: true,
    autoplaySpeed: 4000
  }
}
