import * as InvestmentActions from './investment.actions';

describe('Investment', () => {
  it('should create an instance', () => {
    expect(new InvestmentActions.LoadInvestments()).toBeTruthy();
  });
});
