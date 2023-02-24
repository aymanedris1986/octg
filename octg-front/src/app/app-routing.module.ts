import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewTradeComponent } from './components/trades/new-trade/new-trade.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new-trade', component: NewTradeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
