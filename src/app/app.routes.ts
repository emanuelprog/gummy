import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CollectionComponent} from "./collection/collection.component";
import {ProductComponent} from "./product/product.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'collections/:slug', component: CollectionComponent },
    { path: 'product/:slug', component: ProductComponent }
];