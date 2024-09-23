import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8PageComponent } from './day-8-page.component';

describe('Day8PageComponent', () => {
  let component: Day8PageComponent;
  let fixture: ComponentFixture<Day8PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day8PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day8PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
