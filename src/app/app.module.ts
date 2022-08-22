import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { StockComponent } from './components/stock/stock.component';
import { AvailablePipe } from './pipes/available.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { PariteComponent } from './components/parite/parite.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProduitComponent } from './components/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    StockComponent,
    AvailablePipe,
    PriceFilterPipe,
    AccueilComponent,
    PariteComponent,
    ContactComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
