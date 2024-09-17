import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3PageComponent } from './day-3-page.component';

describe('Day3PageComponent', () => {
  let component: Day3PageComponent;
  let fixture: ComponentFixture<Day3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day3PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
