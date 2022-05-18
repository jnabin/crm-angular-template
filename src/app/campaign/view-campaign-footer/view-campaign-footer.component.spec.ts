import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampaignFooterComponent } from './view-campaign-footer.component';

describe('ViewCampaignFooterComponent', () => {
  let component: ViewCampaignFooterComponent;
  let fixture: ComponentFixture<ViewCampaignFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCampaignFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampaignFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
