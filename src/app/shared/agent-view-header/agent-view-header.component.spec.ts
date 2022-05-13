import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentViewHeaderComponent } from './agent-view-header.component';

describe('AgentViewHeaderComponent', () => {
  let component: AgentViewHeaderComponent;
  let fixture: ComponentFixture<AgentViewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentViewHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
