import { CampaignService, ICallConnection } from './../../campaign/services/campaign.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-view-header',
  templateUrl: './campaign-view-header.component.html',
  styleUrls: ['./campaign-view-header.component.scss']
})
export class CampaignViewHeaderComponent implements OnInit {
  campaignName: string = "Campaign1";
  showProgress: boolean = false;
  eta: number = 49;
  completionPercent: number = 0;

  constructor(private CampaignService: CampaignService) { }

  ngOnInit(): void {
    this.CampaignService.getshowProgress.subscribe((result: boolean) => {
      this.showProgress = result;
    });

    this.CampaignService.getconnectionStatus.subscribe((result: ICallConnection) => {
      this.eta = result.count;
      this.completionPercent = result.progressPercentage;
    });
  }

}
