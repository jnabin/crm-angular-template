import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Conversation } from 'src/app/model/conversation';
@Component({
  selector: 'app-messenger-sidebar',
  templateUrl: './messenger-sidebar.component.html',
  styleUrls: ['./messenger-sidebar.component.scss']
})
export class MessengerSidebarComponent implements OnInit {
  @Input() conversationItem?: Conversation;

  constructor() { }

  ngOnInit(): void {
  }

}
