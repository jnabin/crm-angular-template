import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignViewHeaderComponent } from './campaign-view-header.component';

describe('CampaignViewHeaderComponent', () => {
  let component: CampaignViewHeaderComponent;
  let fixture: ComponentFixture<CampaignViewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignViewHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
