import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-view-header',
  templateUrl: './campaign-view-header.component.html',
  styleUrls: ['./campaign-view-header.component.scss']
})
export class CampaignViewHeaderComponent implements OnInit {
  campaignName: string = "Campaign1";
  constructor() { }

  ngOnInit(): void {
  }

}
