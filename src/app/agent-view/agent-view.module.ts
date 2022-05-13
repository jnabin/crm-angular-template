import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentViewRoutingModule } from './agent-view-routing.module';
import { AgentViewComponent } from './agent-view.component';


@NgModule({
  declarations: [
    AgentViewComponent
  ],
  imports: [
    SharedModule,
    AgentViewRoutingModule
  ]
})
export class AgentViewModule { }
