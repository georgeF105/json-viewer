import { Injectable } from '@angular/core';

export type MessageType = 'parse';
export interface MessageArgs {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class WebworkerService {
  private _worker: Worker;

  constructor() { }

  private getOrCreateWorker (): Worker {
    if (!this._worker) {
      this._worker = new Worker('assets/webworker.js');
    }
    return this._worker;
  }

  private postMessage (type: MessageType, args: MessageArgs): void {
    this.getOrCreateWorker().postMessage({ type, args });
  }

  public parseString (string: string, path?: string): Promise<any> {
    const worker = this.getOrCreateWorker();
    this.postMessage('parse', { string, path });

    return new Promise ((resolve, reject) => {
      worker.onmessage = (event: MessageEvent) => {
        const { data } = event;
        resolve(data);
      };
    });
  }
}
