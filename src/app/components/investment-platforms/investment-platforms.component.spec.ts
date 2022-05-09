import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPlatformsComponent } from './investment-platforms.component';

describe('InvestmentPlatformsComponent', () => {
  let component: InvestmentPlatformsComponent;
  let fixture: ComponentFixture<InvestmentPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPlatformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
