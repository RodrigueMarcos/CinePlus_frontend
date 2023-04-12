import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoleteroComponent } from './boletero.component';

describe('BoleteroComponent', () => {
  let component: BoleteroComponent;
  let fixture: ComponentFixture<BoleteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoleteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoleteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
