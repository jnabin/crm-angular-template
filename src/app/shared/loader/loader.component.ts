import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProgressBarService } from 'src/app/services/progress-bar.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  showHide: boolean = false;
    private subscription?: Subscription;

    constructor(private progressBarService: ProgressBarService) {}

    ngOnInit() {
        this.subscription = this.progressBarService.getUpdateProgressBar().subscribe((status: boolean) => {
            this.showHide = status;
        });
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }

}
