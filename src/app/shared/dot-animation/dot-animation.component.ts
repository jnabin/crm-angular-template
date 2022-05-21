import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-animation',
  templateUrl: './dot-animation.component.html',
  styleUrls: ['./dot-animation.component.scss']
})
export class DotAnimationComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() color: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
