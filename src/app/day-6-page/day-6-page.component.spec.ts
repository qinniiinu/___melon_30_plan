import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6PageComponent } from './day-6-page.component';

describe('Day6PageComponent', () => {
  let component: Day6PageComponent;
  let fixture: ComponentFixture<Day6PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day6PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day6PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
