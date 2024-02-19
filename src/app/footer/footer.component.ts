import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  scrollToTop(): void {
    (window as any).scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
