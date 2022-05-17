import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-view-header',
  templateUrl: './agent-view-header.component.html',
  styleUrls: ['./agent-view-header.component.scss']
})
export class AgentViewHeaderComponent implements OnInit {
  @Input() isActive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
