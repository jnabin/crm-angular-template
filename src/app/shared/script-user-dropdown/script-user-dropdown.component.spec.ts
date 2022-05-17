import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptUserDropdownComponent } from './script-user-dropdown.component';

describe('ScriptUserDropdownComponent', () => {
  let component: ScriptUserDropdownComponent;
  let fixture: ComponentFixture<ScriptUserDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptUserDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
