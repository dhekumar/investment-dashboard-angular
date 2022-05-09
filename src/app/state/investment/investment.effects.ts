import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, EMPTY, exhaustMap, map, of, switchMap } from 'rxjs';
import { InvestmentService } from 'src/app/services/investment.service';
import { InvestmentActionTypes, LoadInvestments, loadInvestmentsFailure, loadInvestmentsSuccess } from './investment.actions';



@Injectable()
export class InvestmentEffects {

  loadInvestments$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(InvestmentActionTypes.LoadInvestments),
      concatMap(() =>
        this.investmentService.getInvestments().pipe(
          map(data => loadInvestmentsSuccess({ data })),
          catchError(error => of(loadInvestmentsFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private investmentService:InvestmentService) {}

}
