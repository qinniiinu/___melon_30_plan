import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePayComponent } from './line-pay.component';

describe('LinePayComponent', () => {
  let component: LinePayComponent;
  let fixture: ComponentFixture<LinePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinePayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
