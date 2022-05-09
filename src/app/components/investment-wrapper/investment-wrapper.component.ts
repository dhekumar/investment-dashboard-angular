import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadInvestments } from 'src/app/state/investment/investment.actions';

@Component({
  selector: 'app-investment-wrapper',
  templateUrl: './investment-wrapper.component.html',
  styleUrls: ['./investment-wrapper.component.scss']
})
export class InvestmentWrapperComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadInvestments());
  }

}
