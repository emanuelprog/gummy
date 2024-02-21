import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ResultadosComponent} from "./components/resultados/resultados.component";
import {IconesComponent} from "./components/icones/icones.component";
import {CelebridadesComponent} from "./components/celebridades/celebridades.component";
import {GummyComponent} from "./components/gummy/gummy.component";
import {DuvidasComponent} from "./components/duvidas/duvidas.component";
import {ComunidadeComponent} from "../comunidade/comunidade.component";
import {IconesPrincipalComponent} from "./components/icones-principal/icones-principal.component";
import {BannersPrincipalComponent} from "./components/banners-principal/banners-principal.component";
import { QueridinhosComponent } from './components/queridinhos/queridinhos.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { TopOfertasComponent } from './components/top-ofertas/top-ofertas.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NgForOf,
        NgClass,
        ResultadosComponent,
        IconesComponent,
        CelebridadesComponent,
        GummyComponent,
        DuvidasComponent,
        ComunidadeComponent,
        IconesPrincipalComponent,
        BannersPrincipalComponent,
        QueridinhosComponent,
        VitrineComponent,
        TopOfertasComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
