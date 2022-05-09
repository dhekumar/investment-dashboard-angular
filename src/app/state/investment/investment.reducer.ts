import { Action, createReducer, on } from '@ngrx/store';
import { InvestmentActionTypes } from './investment.actions';


export const investmentFeatureKey = 'investment';

export enum Status {
  FAILURE = 'FAILURE',
  SUCCESS = "SUCCESS",
  LOADING = "LOADING",
  PENDING = "PENDING"
}

export interface InvestmentState {
  investments: any[],
  categoriesData:any,
  platformData:any,
  error: string | null,
  status: Status
}

export const initialState: InvestmentState = {
  investments: [],
  categoriesData:{},
  platformData:{},
  error: null,
  status: Status.PENDING
};

const processResponse = (data: any) => {
  const obj: any = {
    categoriesData: {},
    platformData: {}
  }
  data.forEach((inv: any) => {
    const v = inv.investmentCurentValue ? parseFloat(inv.investmentCurentValue.replace(/,/g, '')) : 0;
    if (!obj.categoriesData[inv.investmentCategory])
      obj.categoriesData[inv.investmentCategory] = 0;

    if (!obj.platformData[inv.investmentPlatform])
      obj.platformData[inv.investmentPlatform] = 0;

    // Data for Each Category    
    obj.categoriesData[inv.investmentCategory] = obj.categoriesData[inv.investmentCategory] + v;

    // Data for Each Platform    
    obj.platformData[inv.investmentPlatform] = obj.platformData[inv.investmentPlatform] + v;

  });
  return obj;
}

export function reducer(state = initialState, action: any): InvestmentState {
  switch (action.type) {
    case InvestmentActionTypes.LoadInvestments:
      console.log("loading:load Investments Action Reduced");
      return { ...state, status: Status.LOADING };
    case InvestmentActionTypes.LoadInvestmentsSuccess:
      console.log("Success:load Investments Action Reduced");
      const processedResponse = processResponse(action.data);
      return { ...state, status: Status.SUCCESS, error: null, investments: action.data, ...processedResponse }
    case InvestmentActionTypes.LoadInvestmentsFailure:
      console.log("Failure:load Investments Action Reduced");
      return { ...state, status: Status.FAILURE, error: action.payload.error };
    default:
      return state;
  }
}
