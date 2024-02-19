import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {GummyService} from "../gummy.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NgOptimizedImage,
        NgStyle,
        RouterLink,
        NgForOf
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    menuDisplay: string = 'none';
    colecoes: any[] = [];

    constructor(private gummyService: GummyService) {}

    ngOnInit(): void {
        this.gummyService.getColecoes().subscribe(dados => {
            this.colecoes = dados;
        });
    }

    toggleMenu(): void {
        this.menuDisplay = (this.menuDisplay === 'none') ? 'block' : 'none';
    }
}
