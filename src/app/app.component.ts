import { Component } from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {AnnouncementBarComponent} from "./announcement-bar/announcement-bar.component";
import {ComunidadeComponent} from "./comunidade/comunidade.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
        FooterComponent,
        HomeComponent,
        HeaderComponent,
        AnnouncementBarComponent,
        ComunidadeComponent,
        RouterOutlet
    ],
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gummy';

  constructor() {}
}
