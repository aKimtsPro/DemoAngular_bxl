import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FirstComponent } from "./components/first/first.component";
import { PariteComponent } from "./components/parite/parite.component";
import { ProduitComponent } from "./components/produit/produit.component";
import { StockComponent } from "./components/stock/stock.component";

const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'stock', component: StockComponent },
    { path: 'first', component: FirstComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'produit/:id', component: ProduitComponent},
    { path: 'parite/:nbr', component: PariteComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}