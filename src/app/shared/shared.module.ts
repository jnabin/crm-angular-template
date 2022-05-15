import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentViewHeaderComponent } from './agent-view-header/agent-view-header.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgentViewHeaderComponent,
    ColorBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AgentViewHeaderComponent,
    CommonModule,
    FormsModule,
    ColorBoxComponent
  ]
})
export class SharedModule { }
