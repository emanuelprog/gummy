import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-icones-principal',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './icones-principal.component.html',
  styleUrl: './icones-principal.component.css'
})
export class IconesPrincipalComponent {

}
