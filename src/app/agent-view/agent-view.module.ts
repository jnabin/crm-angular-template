import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AgentViewRoutingModule } from './agent-view-routing.module';
import { AgentViewComponent } from './agent-view.component';
import { GeneralDescriptionComponent } from './general-description/general-description.component';
import { ChatComponent } from './chat/chat.component';
import {MatIconModule} from '@angular/material/icon';
import { ProfileInformationComponent } from './profile-information/profile-information.component';


@NgModule({
  declarations: [
    AgentViewComponent,
    GeneralDescriptionComponent,
    ChatComponent,
    ProfileInformationComponent
  ],
  imports: [
    SharedModule,
    AgentViewRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class AgentViewModule { }
