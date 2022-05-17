import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentViewHeaderComponent } from './agent-view-header/agent-view-header.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ScriptUserDropdownComponent } from './script-user-dropdown/script-user-dropdown.component';



@NgModule({
  declarations: [
    AgentViewHeaderComponent,
    ColorBoxComponent,
    ScriptUserDropdownComponent
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
    PickerModule,
    ScriptUserDropdownComponent
  ]
})
export class SharedModule { }
