import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewTradeComponent } from './components/trades/new-trade/new-trade.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewTradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
