import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-campaign-body',
  templateUrl: './campaign-body.component.html',
  styleUrls: ['./campaign-body.component.scss']
})
export class CampaignBodyComponent implements OnInit {
  agentName: string = '[Agent_Name]';
  company: string = '[name of the department/company]';
  supporter: string = '[supporter_name]';
  @Input() openOtpPage: boolean = false;
  @Output() openOtpPageChange: EventEmitter<boolean> = new EventEmitter();
  @Output() quitOtp: EventEmitter<boolean> = new EventEmitter();
  @Input() otpTitle: string = '';

  closeOtp() {
    this.openOtpPage = false;
    this.openOtpPageChange.emit(false);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
