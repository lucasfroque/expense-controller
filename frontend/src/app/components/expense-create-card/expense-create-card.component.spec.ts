import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCreateCardComponent } from './expense-create-card.component';

describe('ExpenseCreateCardComponent', () => {
  let component: ExpenseCreateCardComponent;
  let fixture: ComponentFixture<ExpenseCreateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseCreateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseCreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
