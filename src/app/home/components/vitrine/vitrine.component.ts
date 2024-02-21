import { Component } from '@angular/core';
import { GummyService } from '../../../gummy.service';
import { ActivatedRoute } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {

  constructor(
    private route: ActivatedRoute,
    private gummyService: GummyService
    ) {}

    vitrines: any[] = [];
    firstChild: boolean = true;
    lastChild: boolean = false;
    previousScrollLeft = 0;

  ngOnInit() {
    this.gummyService.getVitrineHome().subscribe(dados => {
    this.vitrines = dados;
    });
  }

  ngAfterViewInit(): void {
    const divElement = document.getElementById('sliderVitrine');
    
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
