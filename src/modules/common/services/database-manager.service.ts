import { Injectable } from '@angular/core';

export const GAMIFY_ANYTHING_DB = 'GamifyAnythingDb';

@Injectable()
export class DatabaseManagerService {
  state = false;
  db: IDBOpenDBRequest;

  constructor() {
    
  }

  init() {
    let openRequest = window.indexedDB.open(GAMIFY_ANYTHING_DB);
    openRequest.onerror
  }

  open(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.");
        reject();
        return;
      }

      let openRequest = window.indexedDB.open(GAMIFY_ANYTHING_DB);
      openRequest.onsuccess = (ev: Event) => resolve((<any>ev.target).result);
      openRequest.onerror = (ev: Event) => reject(ev);
    });
  }
}
