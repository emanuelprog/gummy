import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-gummy',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './gummy.component.html',
  styleUrl: './gummy.component.css'
})
export class GummyComponent {

}
