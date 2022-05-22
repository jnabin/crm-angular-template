import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignBodyComponent } from './campaign-body/campaign-body.component';
import { ViewCampaignFooterComponent } from './view-campaign-footer/view-campaign-footer.component';
import { OtpCodeComponent } from './otp-code/otp-code.component';
import { CallInitiaeComponent } from './call-initiae/call-initiae.component';
import { ConnectionSuccessComponent } from './connection-success/connection-success.component';
import { ConnectionProgressComponent } from './connection-progress/connection-progress.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MessageComponent } from './message/message.component'


@NgModule({
  declarations: [
    CampaignComponent,
    CampaignBodyComponent,
    ViewCampaignFooterComponent,
    OtpCodeComponent,
    CallInitiaeComponent,
    ConnectionSuccessComponent,
    ConnectionProgressComponent,
    MessageComponent
  ],
  imports: [
    CampaignRoutingModule,
    MatButtonModule,
    MatProgressBarModule,
    SharedModule
  ]
})
export class CampaignModule { }
