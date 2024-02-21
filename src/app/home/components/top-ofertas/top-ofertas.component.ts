import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GummyService } from '../../../gummy.service';

@Component({
  selector: 'app-top-ofertas',
  standalone: true,
  imports: [SlickCarouselModule, NgForOf],
  templateUrl: './top-ofertas.component.html',
  styleUrl: './top-ofertas.component.css'
})
export class TopOfertasComponent {

  constructor(
    private route: ActivatedRoute,
    private gummyService: GummyService
    ) {}
    ofertas: any[] = [];
    firstChild: boolean = true;
    lastChild: boolean = false;
    previousScrollLeft = 0;

    ngOnInit() {
      this.gummyService.getTopOfertas().subscribe(dados => {
      this.ofertas = dados;
      });
    }

    ngAfterViewInit(): void {
      const divElement = document.getElementById('sliderTopOfertas');
      if (divElement) {
        divElement.addEventListener('scroll', this.onScroll);
      } 
    }

    onScroll = (event: any) => {
      const divElement = event.target;
      const currentScrollLeft = divElement.scrollLeft;
    
      if (currentScrollLeft !== this.previousScrollLeft) {
        this.previousScrollLeft = currentScrollLeft;
        
        if (currentScrollLeft === 0) {
          this.firstChild = true;
        } else {
          this.firstChild = false;
        }
        
        if (currentScrollLeft + divElement.offsetWidth >= divElement.scrollWidth) {
          this.lastChild = true;
        } else {
          this.lastChild = false;
        }
      }
    }

  slideConfig = {
    slidesToShow: 1.15,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="ml-1 absolute flex justify-center left-0 w-10 h-10 my-auto sm:visible inset-y-1/2 text-white rounded-full opacity-40 ds-bg-accent-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path></svg></button>',
    nextArrow: '<button type="button" class="mr-1 absolute flex justify-center right-0 w-10 h-10 my-auto sm:visible inset-y-1/2  text-center text-white rounded-full opacity-40 ds-bg-accent-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto w-6 h-6" width="24" height="24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg></button>'
  }
}
