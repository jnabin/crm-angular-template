import { Subscription } from 'rxjs/internal/Subscription';
import { CampaignService, ICallConnection } from './../../campaign/services/campaign.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-campaign-view-header',
  templateUrl: './campaign-view-header.component.html',
  styleUrls: ['./campaign-view-header.component.scss']
})
export class CampaignViewHeaderComponent implements OnInit, OnDestroy {
  campaignName: string = "Campaign1";
  showProgress: boolean = false;
  eta: number = 49;
  completionPercent: number = 0;
  subscription?: Subscription;
  subscription1?: Subscription;

  constructor(private CampaignService: CampaignService) { }

  ngOnInit(): void {
    this.subscription = this.CampaignService.getshowProgress.subscribe((result: boolean) => {
      this.showProgress = result;
    });

    this.subscription1 = this.CampaignService.getconnectionStatus.subscribe((result: ICallConnection) => {
      this.eta = result.count;
      this.completionPercent = result.progressPercentage;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe()
    if(this.subscription1) this.subscription1.unsubscribe()
  }

}
