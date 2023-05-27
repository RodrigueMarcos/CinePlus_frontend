import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSoldComponent } from './list-ticket-sold.component';

describe('TicketSoldComponent', () => {
  let component: TicketSoldComponent;
  let fixture: ComponentFixture<TicketSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketSoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
