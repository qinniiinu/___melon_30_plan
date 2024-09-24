import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day9PageComponent } from './day-9-page.component';

describe('Day9PageComponent', () => {
  let component: Day9PageComponent;
  let fixture: ComponentFixture<Day9PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day9PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day9PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
