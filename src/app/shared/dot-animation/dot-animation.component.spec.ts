import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotAnimationComponent } from './dot-animation.component';

describe('DotAnimationComponent', () => {
  let component: DotAnimationComponent;
  let fixture: ComponentFixture<DotAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
