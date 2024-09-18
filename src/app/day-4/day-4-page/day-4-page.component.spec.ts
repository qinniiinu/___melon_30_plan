import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4PageComponent } from './day-4-page.component';

describe('Day4PageComponent', () => {
  let component: Day4PageComponent;
  let fixture: ComponentFixture<Day4PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day4PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
