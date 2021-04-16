import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchmoveComponent } from './touchmove.component';

describe('TouchmoveComponent', () => {
  let component: TouchmoveComponent;
  let fixture: ComponentFixture<TouchmoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchmoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
