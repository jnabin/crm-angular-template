import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.startCountdown();
  }

  startCountdown() {
    const interval = setInterval(() => {
      this.eta--;
      this.completionPercent = Math.abs(((this.eta / this.n) * 100) - 100);
      if (this.eta == 0) {
        clearInterval(interval);
        this.router.navigate(['agent-view']);
      }
    }, 300);
  }

  ngOnInit(): void {
  }

}
