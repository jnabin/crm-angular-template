import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-body',
  templateUrl: './campaign-body.component.html',
  styleUrls: ['./campaign-body.component.scss']
})
export class CampaignBodyComponent implements OnInit {
  agentName: string = '[Agent_Name]';
  company: string = '[name of the department/company]';
  supporter: string = '[supporter_name]';

  constructor() { }

  ngOnInit(): void {
  }

}
