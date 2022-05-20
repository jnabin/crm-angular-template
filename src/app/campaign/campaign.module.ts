import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignBodyComponent } from './campaign-body/campaign-body.component';
import { ViewCampaignFooterComponent } from './view-campaign-footer/view-campaign-footer.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';


@NgModule({
  declarations: [
    CampaignComponent,
    CampaignBodyComponent,
    ViewCampaignFooterComponent,
    OtpCodeComponent
  ],
  imports: [
    CampaignRoutingModule,
    MatButtonModule,
    SharedModule
  ]
})
export class CampaignModule { }
