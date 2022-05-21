import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallInitiaeComponent } from './call-initiae.component';

describe('CallInitiaeComponent', () => {
  let component: CallInitiaeComponent;
  let fixture: ComponentFixture<CallInitiaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallInitiaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallInitiaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
