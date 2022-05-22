import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface ICallConnection{
  progressPercentage: number,
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private _connectionStatus = new BehaviorSubject<ICallConnection>({
    progressPercentage : 0,
    count: 49
  })

  private _showProgress = new BehaviorSubject<boolean>(false);

  private _connectionStatus$ = this._connectionStatus.asObservable();
  private _showProgress$ = this._showProgress.asObservable();

  get getconnectionStatus(): Observable<ICallConnection> {
    return this._connectionStatus$;
  }

  setconnectionStatus(latestValue: ICallConnection) {
    return this._connectionStatus.next(latestValue);
  }

  get getshowProgress(): Observable<boolean> {
    return this._showProgress$;
  }

  setShowProgress(latestValue: boolean) {
    return this._showProgress.next(latestValue);
  }

  constructor() { }
}
