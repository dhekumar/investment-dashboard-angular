import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InvestmentEffects } from './investment.effects';

describe('InvestmentEffects', () => {
  let actions$: Observable<any>;
  let effects: InvestmentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InvestmentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InvestmentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
