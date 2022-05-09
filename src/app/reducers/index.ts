import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromInvestment from '../state/investment/investment.reducer';




export interface AppState {

  [fromInvestment.investmentFeatureKey]: fromInvestment.InvestmentState;
}

export const reducers: ActionReducerMap<AppState> = {
  
  [fromInvestment.investmentFeatureKey]: fromInvestment.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
