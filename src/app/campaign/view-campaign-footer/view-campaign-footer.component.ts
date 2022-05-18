import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-campaign-footer',
  templateUrl: './view-campaign-footer.component.html',
  styleUrls: ['./view-campaign-footer.component.scss']
})
export class ViewCampaignFooterComponent implements OnInit {
  loading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  connect() {
    this.loading = true;
    setTimeout(this.hide, 2000);
  }

  hide = () =>{
    this.loading = false
  };

}
