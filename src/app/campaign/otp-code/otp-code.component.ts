import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-otp-code',
  templateUrl: './otp-code.component.html',
  styleUrls: ['./otp-code.component.scss']
})
export class OtpCodeComponent implements OnInit {
  @Input() otpTitle: string = '';
  @Output() closeOtp: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  back(){
    this.closeOtp.emit();
  }

}
