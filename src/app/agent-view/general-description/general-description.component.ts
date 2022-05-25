import { AgentViewService } from './../agent-view.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-general-description',
  templateUrl: './general-description.component.html',
  styleUrls: ['./general-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralDescriptionComponent implements OnInit {
  script: boolean = false;
  selectedIndex = 0;
  seletedMenu: string = 'Guy Russel';
  persons: string[] = ['Guy Russel', 'Floyd Russel', 'Marvin Russel', 'Theresa Russel'];

  constructor(private loader: ProgressBarService) { }

  ngOnInit(): void {
  }

  scriptToggle(event: any) {
    if(event.index == 3) {
      this.script = true;
    } else {
      this.script = false;
    }
  }

  changeTab(value: string){
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
      this.selectedIndex = 0;
      this.seletedMenu = value;
    }, 1000);
  }

}
