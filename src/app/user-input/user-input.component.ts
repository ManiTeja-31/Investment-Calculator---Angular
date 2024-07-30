import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { data } from '../data.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<data>();

  // using output function
  // calculate = output<data>();

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  constructor(private investmentService: InvestmentService){}

  onSubmited() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment
    })
    // this.calculate.emit({
    //   initialInvestment: +this.initialInvestment,
    //   duration: +this.duration,
    //   expectedReturn: +this.expectedReturn,
    //   annualInvestment: +this.annualInvestment
    // })
  }
}
