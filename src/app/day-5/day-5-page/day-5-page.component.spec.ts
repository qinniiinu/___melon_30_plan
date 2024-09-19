import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5PageComponent } from './day-5-page.component';

describe('Day5PageComponent', () => {
  let component: Day5PageComponent;
  let fixture: ComponentFixture<Day5PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day5PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day5PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
