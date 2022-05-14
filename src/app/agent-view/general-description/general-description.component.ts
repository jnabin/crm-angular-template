import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-general-description',
  templateUrl: './general-description.component.html',
  styleUrls: ['./general-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralDescriptionComponent implements OnInit {
  seletedMenu: string = 'Guy Russel';
  persons: string[] = ['Guy Russel', 'Floyd Russel', 'Marvin Russel', 'Theresa Russel'];
  constructor() { }

  ngOnInit(): void {
  }

}
