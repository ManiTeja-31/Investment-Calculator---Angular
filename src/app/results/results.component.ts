import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  // @Input() results?:{
  //   year:number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  constructor(private investmentService:InvestmentService){}
  get results(){
    return this.investmentService.resultsData;
  }
}
