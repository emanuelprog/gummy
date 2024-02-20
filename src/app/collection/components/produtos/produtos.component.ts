import {Component, Input, OnInit} from '@angular/core';
import { GummyService } from '../../../gummy.service';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NgForOf, CommonModule, RouterLink],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit{
  @Input() colecao!: any;
  @Input() produtos: any[] = [];

  constructor(
    private gummyService: GummyService
  ) {}

  ngOnInit(): void {
    
  }

}
