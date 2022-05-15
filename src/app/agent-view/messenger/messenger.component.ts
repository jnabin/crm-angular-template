import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Message {
  id: number,
  body: string,
  time: string,
  me: boolean
}

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  messageContent: string = '';
  toggleEmojiPicker: boolean = false;
  messages: Message[] = [
    {id: 1, body: 'Ever wondered how some graphic', time: '8.00 PM', me: false},
    {id: 2, body: 'Freelance Design Tricks', time: '8.20 PM', me: true},
    {id: 3, body: `Successful businesses have many things
      	           in common, today we’ll look at the big
                   of recognition and how a digital`, time: '8.30 PM', me: false},
    {id: 4, body: 'Marketers advertisers usually focus their', time: '8.30 PM', me: false},
    {id: 5, body: 'Show can be a very effective method', time: '8.31 PM', me: true},
  ];
  constructor() { }

  getProfilePhoto(myself: boolean): string {
    return myself ? '/assets/images/myself.svg' : '/assets/images/other.svg';
  }

  ngOnInit(): void {
  }

  getCurrentTime(): string {
    let time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
  sendMessage() {
    this.toggleEmojiPicker = false;
    if(this.messageContent.length == 0){
      return;
    }
    let lastMessageId = Math.max(...this.messages.map(x => x.id));
    this.messages.push(
      {id: lastMessageId++, body: this.messageContent??'', time: this.getCurrentTime(), me: true }
    );
    this.messageContent = '';
  }


  triggerFunction(event: any) {
    if (event.ctrlKey && event.key === 'Enter') {
      let text: any = document.getElementById("textarea1");
      text.value += '\n';
      this.messageContent += '\n';
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  }

  addEmoji(event: any) {
    this.messageContent += event.emoji.native;
  }

}
