import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { StockComponent } from './stock/stock.component';
import { AvailablePipe } from './pipes/available.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    StockComponent,
    AvailablePipe,
    PriceFilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
