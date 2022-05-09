import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCategoriesComponent } from './investment-categories.component';
import { Store, StoreModule } from '@ngrx/store';

describe('InvestmentCategoriesComponent', () => {
  let component: InvestmentCategoriesComponent;
  let fixture: ComponentFixture<InvestmentCategoriesComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ InvestmentCategoriesComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentCategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
