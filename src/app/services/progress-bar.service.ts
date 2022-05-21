import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private readonly updateProgressBar$: EventEmitter<any>;

  constructor() {
      this.updateProgressBar$ = new EventEmitter();
  }

  public getUpdateProgressBar() {
      return this.updateProgressBar$;
  }

  public show(): void {
      this.updateProgressBar$.emit(true);
  }

  public hide(): void {
      setTimeout(() => {
          this.updateProgressBar$.emit(false);
      }, 1500);
  }
}
