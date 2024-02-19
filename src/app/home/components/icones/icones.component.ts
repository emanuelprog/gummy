import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-icones',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './icones.component.html',
  styleUrl: './icones.component.css'
})
export class IconesComponent {

}
