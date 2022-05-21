import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-call-initiae',
  templateUrl: './call-initiae.component.html',
  styleUrls: ['./call-initiae.component.scss']
})
export class CallInitiaeComponent implements OnInit, OnChanges {
  @Input() displayCallInitiate: any;
  @Output() connectionSuccess: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.connectionSuccess.emit(true);
    }, 5000);
  }

  ngOnInit(): void {
  }

}
