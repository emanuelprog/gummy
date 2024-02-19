import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-duvidas',
  standalone: true,
    imports: [
        NgForOf,
        NgClass
    ],
  templateUrl: './duvidas.component.html',
  styleUrl: './duvidas.component.css'
})
export class DuvidasComponent {
  currentTabIndex: number = 0;

  tabs = [
    {id: 1, name: 'GUMMY HAIR', colorClass: 'ds-bg-transparent'},
    {id: 2, name: 'GUMMY NIGHT', colorClass: 'ds-bg-2'},
    {id: 3, name: 'GUMMY KIDS', colorClass: 'ds-bg-7'},
    {id: 4, name: 'GUMMY SKIN', colorClass: 'ds-bg-5'},
    {id: 5, name: 'GUMMY FOR MEN', colorClass: 'ds-bg-6'},
    {id: 6, name: 'GUMMY VITC', colorClass: 'ds-bg-7'}
  ];

  changeTab(tabIndex: number) {
    this.currentTabIndex = tabIndex;
  }
}
