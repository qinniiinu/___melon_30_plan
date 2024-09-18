import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCollapseComponent } from './toggle-collapse.component';

describe('ToggleCollapseComponent', () => {
  let component: ToggleCollapseComponent;
  let fixture: ComponentFixture<ToggleCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleCollapseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
