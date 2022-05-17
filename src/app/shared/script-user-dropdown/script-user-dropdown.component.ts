import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-script-user-dropdown',
  templateUrl: './script-user-dropdown.component.html',
  styleUrls: ['./script-user-dropdown.component.scss']
})
export class ScriptUserDropdownComponent implements OnInit {
  notExpand = true;
  selectedValue: string = "Yes";
  constructor() { }

  ngOnInit(): void {
  }

}
