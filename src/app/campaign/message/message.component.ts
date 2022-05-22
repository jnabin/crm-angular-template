import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Output() back: EventEmitter<boolean> = new EventEmitter();

  constructor(private campaign: CampaignService) { }

  ngOnInit(): void {
  }

  backToProgress(){
    this.hideGlobalCallConnectionProgress()
    this.back.emit(true);
  }

  hideGlobalCallConnectionProgress() {
    this.campaign.setShowProgress(false);
  }

}
