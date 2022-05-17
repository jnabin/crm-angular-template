import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignBodyComponent } from './campaign-body/campaign-body.component';


@NgModule({
  declarations: [
    CampaignComponent,
    CampaignBodyComponent
  ],
  imports: [
    CampaignRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class CampaignModule { }
