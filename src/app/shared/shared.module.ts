import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentViewHeaderComponent } from './agent-view-header/agent-view-header.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';



@NgModule({
  declarations: [
    AgentViewHeaderComponent,
    ColorBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PickerModule
  ],
  exports: [
    AgentViewHeaderComponent,
    CommonModule,
    FormsModule,
    ColorBoxComponent,
    PickerModule
  ]
})
export class SharedModule { }
