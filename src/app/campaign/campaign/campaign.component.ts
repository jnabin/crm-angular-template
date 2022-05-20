import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  openOtpPage: boolean = false;
  callType: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  openOtpCode(value: string){
    this.openOtpPage = true;
    this.callType = value;
  }

}
