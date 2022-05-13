import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentViewComponent } from './agent-view.component';

const routes: Routes = [
  {
    path: '',
    component: AgentViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentViewRoutingModule { }
