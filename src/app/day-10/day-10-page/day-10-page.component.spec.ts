import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day10PageComponent } from './day-10-page.component';

describe('Day10PageComponent', () => {
  let component: Day10PageComponent;
  let fixture: ComponentFixture<Day10PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day10PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day10PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
