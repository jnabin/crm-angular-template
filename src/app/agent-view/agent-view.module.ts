import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { ScriptComponent } from './script/script.component';


@NgModule({
  declarations: [
    AgentViewComponent,
    GeneralDescriptionComponent,
    ChatComponent,
    ProfileInformationComponent,
    ScriptComponent
  ],
  imports: [
    SharedModule,
    AgentViewRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class AgentViewModule { }
