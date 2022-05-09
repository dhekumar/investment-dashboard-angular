import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentWrapperComponent } from './investment-wrapper.component';

describe('InvestmentWrapperComponent', () => {
  let component: InvestmentWrapperComponent;
  let fixture: ComponentFixture<InvestmentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
