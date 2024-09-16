import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDebounceComponent } from './button-debounce.component';

describe('ButtonDebounceComponent', () => {
  let component: ButtonDebounceComponent;
  let fixture: ComponentFixture<ButtonDebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDebounceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
