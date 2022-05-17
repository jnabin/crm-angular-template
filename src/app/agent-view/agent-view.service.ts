import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentViewService {

  private isScript = new BehaviorSubject<boolean>(false);
  private _isScript$ = this.isScript.asObservable();

  getIsScript(): Observable<boolean> {
    return this._isScript$;
  }

  setIsScript(value: boolean) {
    return this.isScript.next(value);
  }
}
