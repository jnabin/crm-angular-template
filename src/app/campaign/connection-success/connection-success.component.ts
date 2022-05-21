import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-connection-success',
  templateUrl: './connection-success.component.html',
  styleUrls: ['./connection-success.component.scss']
})
export class ConnectionSuccessComponent implements OnInit, OnChanges {
  counter: number = 7;
  openProgress: boolean = false;
  @Input() displaySuccess: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.startCountdown();
  }

  ngOnInit(): void {
  }

  startCountdown() {
    const interval = setInterval(() => {
      this.counter--;

      if (this.counter == 0 ) {
        clearInterval(interval);
        this.openProgress = true;
      }
    }, 1000);
  }

}
