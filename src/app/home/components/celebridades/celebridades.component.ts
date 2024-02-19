import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-celebridades',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './celebridades.component.html',
  styleUrl: './celebridades.component.css'
})
export class CelebridadesComponent {

}
