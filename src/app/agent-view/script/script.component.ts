import { AgentViewService } from './../agent-view.service';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.scss']
})
export class ScriptComponent implements OnInit {
  @Input() scriptPerson: string[] = [];
  selected = 1;
  agentName: string = '[Agent_Name]';
  company: string = '[name of the department/company]';
  supporter: string = '*supporter_name*';

  @Output() script: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
