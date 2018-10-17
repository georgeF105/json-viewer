import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebworkerService } from '../webworker/webworker.service';

@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  public currentFile$ = new BehaviorSubject<Object>({});

  constructor(
    private _webworkerService: WebworkerService
  ) { }

  public onNewFileUploaded (string: string): void {
    this._webworkerService.parseString(string)
      .then(response => {
        this.currentFile$.next(response);
      });
  }
}
