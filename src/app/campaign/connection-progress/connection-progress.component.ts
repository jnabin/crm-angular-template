import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-connection-progress',
  templateUrl: './connection-progress.component.html',
  styleUrls: ['./connection-progress.component.scss']
})
export class ConnectionProgressComponent implements OnInit, OnChanges {
  @Input() displayProgress: boolean = false;
  completionPercent: number = 0;
  n: number = 49;
  eta: number = 49;
  showmessage: boolean = false;

  constructor(
    private router: Router,
    private campaign: CampaignService
    ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.startCountdown();
  }

  startCountdown() {
    const interval = setInterval(() => {
      this.eta--;
      this.completionPercent = Math.abs(((this.eta / this.n) * 100) - 100);
      this.setGlobalCallConnectionProgress();
      if (this.eta == 0) {
        clearInterval(interval);
        this.setGlobalCallConnectionProgress(false);
        this.router.navigate(['agent-view']);
      }
    }, 500);
  }

  ngOnInit(): void {
  }

  setGlobalCallConnectionProgress(show: boolean = true) {
    this.campaign.setconnectionStatus(
      {
        progressPercentage: this.completionPercent,
        count: this.eta
      }
    );
  }

  showHelpChat() {
    this.showmessage = true;
    this.campaign.setShowProgress(true);
  }

}
