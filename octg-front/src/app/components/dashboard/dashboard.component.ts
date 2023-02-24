import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStateServiceService } from 'src/app/services/applicationstate/application-state-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private dataService : ApplicationStateServiceService) {}

  ngOnInit(): void {
  }

  

  createNewTrade(tradeType:string) {
    this.dataService.changeTradeType(tradeType);
    this.router.navigate(['/new-trade']);
  }

}
