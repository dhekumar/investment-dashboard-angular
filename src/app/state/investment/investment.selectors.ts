import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

export const investmentSelector = createSelector(
    (state: AppState) => state.investment,
    (investment) => investment.investments
);

export const categoriesDataSelector = createSelector(
    (state: AppState) => state.investment,
    (investment) => investment.categoriesData
);

export const platformDataSelector = createSelector(
    (state: AppState) => state.investment,
    (investment) => investment.platformData
);