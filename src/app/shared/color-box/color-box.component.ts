import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {
  @Input() checked: boolean = false;
  @Input() className: string = 'green';

  constructor() { }

  ngOnInit(): void {
  }

}
