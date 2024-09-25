import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day11PageComponent } from './day-11-page.component';

describe('Day11PageComponent', () => {
  let component: Day11PageComponent;
  let fixture: ComponentFixture<Day11PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day11PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day11PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
