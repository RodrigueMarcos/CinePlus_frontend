import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableMovieScreeningComponent } from './list-movie-screening.component';

describe('EnableMovieScreeningComponent', () => {
  let component: EnableMovieScreeningComponent;
  let fixture: ComponentFixture<EnableMovieScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnableMovieScreeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableMovieScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
