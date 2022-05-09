import { Component, OnInit, SimpleChange } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { InvestmentService } from 'src/app/services/investment.service';
import { IInvestment } from 'src/app/state/investment/IInvestment';
import { categoriesDataSelector } from 'src/app/state/investment/investment.selectors';
import * as fromStore from '../../reducers';


@Component({
  selector: 'app-investment-categories',
  templateUrl: './investment-categories.component.html',
  styleUrls: ['./investment-categories.component.scss']
})
export class InvestmentCategoriesComponent implements OnInit {
  
  investments: IInvestment[] = [];
  data = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    ]
  };

  investments$ = this.store.pipe(select(categoriesDataSelector)).subscribe(categories => {
    this.data = this.investmentService.transformCategoryChartData(categories);
  });

  constructor(private store: Store<fromStore.AppState>, private investmentService:InvestmentService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("changes called", changes);
  }

}
