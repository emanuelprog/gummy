import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-banners-principal',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './banners-principal.component.html',
  styleUrl: './banners-principal.component.css'
})
export class BannersPrincipalComponent {

}
