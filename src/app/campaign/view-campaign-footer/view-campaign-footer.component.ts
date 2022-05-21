import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-view-campaign-footer',
  templateUrl: './view-campaign-footer.component.html',
  styleUrls: ['./view-campaign-footer.component.scss']
})
export class ViewCampaignFooterComponent implements OnInit {
  loading: boolean = false;
  @Input() selectCallTime: boolean = false;
  @Output() openOtp: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  connect() {
    this.loading = true;
    setTimeout(this.hide, 1000);
  }

  otpScreen(name: string) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.openOtp.emit(name);
    }, 1000);
  }

  hide = () =>{
    this.loading = false;
    this.selectCallTime = !this.selectCallTime;
  };

}
