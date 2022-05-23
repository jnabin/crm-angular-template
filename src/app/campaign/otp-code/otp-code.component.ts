import { ProgressBarService } from 'src/app/services/progress-bar.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-otp-code',
  templateUrl: './otp-code.component.html',
  styleUrls: ['./otp-code.component.scss']
})
export class OtpCodeComponent implements OnInit {
  @Input() otpTitle: string = '';
  @Output() closeOtp: EventEmitter<void> = new EventEmitter();
  @Output() quitOtp: EventEmitter<void> = new EventEmitter();
  callInitiate: boolean = false;
  connection: boolean = false;
  hideCode: boolean = false;

  constructor(private progressBar: ProgressBarService) { }

  ngOnInit(): void {
  }

  get isInbound(): boolean {
    return this.otpTitle.toLowerCase() == 'inbound call';
  }

  get isOutbound(): boolean {
    return this.otpTitle.toLowerCase() == 'outbound call';
  }

  back(){
    this.closeOtp.emit();
  }

  initiateCall() {
    this.progressBar.show();
    setTimeout(() => {
      this.progressBar.hide();
      this.callInitiate = true;
      this.hideCode = true;
      this.connection = false;
    }, 2000);
  }

  connectionSuccess() {
    this.hideCode = true;
    this.callInitiate = false;
    this.connection = true;
  }

  getIsHideOtp(): boolean {
    return !this.callInitiate && !this.connection;
  }

}
