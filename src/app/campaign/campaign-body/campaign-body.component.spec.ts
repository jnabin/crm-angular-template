import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignBodyComponent } from './campaign-body.component';

describe('CampaignBodyComponent', () => {
  let component: CampaignBodyComponent;
  let fixture: ComponentFixture<CampaignBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
