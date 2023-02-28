import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewTradeComponent } from './components/trades/new-trade/new-trade.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { EditTradeComponent } from './components/trades/edit-trade/edit-trade/edit-trade.component';
import {CalendarModule} from 'primeng/calendar'




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewTradeComponent,
    EditTradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    HttpClientModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
