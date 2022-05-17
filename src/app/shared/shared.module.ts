import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentViewHeaderComponent } from './agent-view-header/agent-view-header.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ScriptUserDropdownComponent } from './script-user-dropdown/script-user-dropdown.component';
import { CampaignViewHeaderComponent } from './campaign-view-header/campaign-view-header.component';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AgentViewHeaderComponent,
    ColorBoxComponent,
    ScriptUserDropdownComponent,
    CampaignViewHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PickerModule,
    MatButtonModule,
    NgbModule
  ],
  exports: [
    AgentViewHeaderComponent,
    CommonModule,
    FormsModule,
    ColorBoxComponent,
    PickerModule,
    ScriptUserDropdownComponent,
    CampaignViewHeaderComponent,
    NgbModule
  ]
})
export class SharedModule { }
