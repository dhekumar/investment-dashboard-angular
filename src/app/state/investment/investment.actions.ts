import { Action, createAction, props } from '@ngrx/store';

export enum InvestmentActionTypes {
  LoadInvestments = '[Investment] Load Investments',
  LoadInvestmentsSuccess = '[Investment] Load Investments Success',
  LoadInvestmentsFailure = '[Investment] Load Investments Failure',
}

export class LoadInvestments implements Action {
  readonly type = InvestmentActionTypes.LoadInvestments;
}

export class LoadInvestmentsSuccess implements Action {
  readonly type = InvestmentActionTypes.LoadInvestmentsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadInvestmentsFailure implements Action {
  readonly type = InvestmentActionTypes.LoadInvestmentsFailure;
  constructor(public payload: { error: any }) { }
}

export type InvestmentActions = LoadInvestments | LoadInvestmentsSuccess | LoadInvestmentsFailure;


export const loadInvestments = createAction(
  InvestmentActionTypes.LoadInvestments
);

export const loadInvestmentsSuccess = createAction(
  InvestmentActionTypes.LoadInvestmentsSuccess,
  props<{ data: any }>()
);

export const loadInvestmentsFailure = createAction(
  InvestmentActionTypes.LoadInvestmentsFailure,
  props<{ error: any }>()
);