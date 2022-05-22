import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
export interface Message {
  id: number,
  body: string,
  image: any,
  time: string,
  me: boolean
}
export interface Conversation {
  name: string,
  latestMessage: string,
  photo: string,
  time: string,
  status: boolean,
  latestMessageRead: boolean,
  messages: Message[],
  isSelected: boolean
}
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
