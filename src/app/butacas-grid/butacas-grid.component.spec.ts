import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButacasGridComponent } from './butacas-grid.component';

describe('ButacasGridComponent', () => {
  let component: ButacasGridComponent;
  let fixture: ComponentFixture<ButacasGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButacasGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButacasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
