import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentViewHeaderComponent } from './agent-view-header/agent-view-header.component';



@NgModule({
  declarations: [
    AgentViewHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgentViewHeaderComponent
  ]
})
export class SharedModule { }
