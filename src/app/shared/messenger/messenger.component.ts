import { Time } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Conversation, Message } from '../messenger-sidebar/messenger-sidebar.component';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  messages: Message[] = [
    {id: 1, body: 'Ever wondered how some graphic', image: '', time: '8.00 PM', me: false},
    {id: 2, body: 'Freelance Design Tricks',image: '', time: '8.20 PM', me: true},
    {id: 3, body: `Successful businesses have many things
      	           in common, today we’ll look at the big
                   of recognition and how a digital`, image: '', time: '8.30 PM', me: false},
    {id: 4, body: 'Marketers advertisers usually focus their', image: '', time: '8.30 PM', me: false},
    {id: 5, body: 'Show can be a very effective method', image: '', time: '8.31 PM', me: true},
  ];
  @Input() fromConversation: boolean = false;
  @Input() conversation: Conversation = {
    name: '',
    messages: this.messages,
    time: '',
    latestMessage: '',
    latestMessageRead: true,
    status: true,
    photo: '',
    isSelected: false
  };

  messageContent: string = '';
  toggleEmojiPicker: boolean = false;
  imageUrl: any;

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
    if(this.messageContent.length == 0 && this.imageUrl == null) return;
    let lastMessageId = Math.max(...this.conversation.messages.map(x => x.id));
    this.conversation.messages.push(
      {id: lastMessageId++, body: this.messageContent??'', image: this.imageUrl, time: this.getCurrentTime(), me: true }
    );
    this.botReplay(lastMessageId++);
    this.nullMessageContent();
  }

  botReplay(lastMessageId: number){
    setTimeout(() => {
      this.conversation.messages.push(
        {id: lastMessageId++, body: 'I am seeing your message!', image: '', time: this.getCurrentTime(), me: false }
      );
      this.playSound();
    }, 1500);
  }

  nullMessageContent() {
    this.messageContent = '';
    this.imageUrl = null;
  }

  playSound() {
    let audio = new Audio();
    audio.src = "../../assets/audio/notification_bell.mp3";
    audio.load();
    audio.play();
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

  fileSelect(event: any) {
    this.toggleEmojiPicker = false;
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			return;
		}
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.imageUrl = reader.result;
      this.sendMessage();
		}
  }

}
