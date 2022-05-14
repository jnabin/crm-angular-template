import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentViewHeaderComponent } from './agent-view-header/agent-view-header.component';
import { ColorBoxComponent } from './color-box/color-box.component';



@NgModule({
  declarations: [
    AgentViewHeaderComponent,
    ColorBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgentViewHeaderComponent,
    CommonModule,
    ColorBoxComponent
  ]
})
export class SharedModule { }
