import {Component, Input, OnInit} from '@angular/core';
import { GummyService } from '../../../gummy.service';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit{
  @Input() colecao!: any;
  produtos: any[] = [];

  constructor(
    private gummyService: GummyService
  ) {}

  ngOnInit(): void {
    this.gummyService.getProdutos().subscribe(dados => {
      this.produtos = dados;
      console.log(this.produtos);
      
    });
  }

}
