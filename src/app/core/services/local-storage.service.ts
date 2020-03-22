import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  setItem(key, item) {
    window.localStorage.setItem(key, item);
  }

  getItem<T>(key): T {
    const itemAsString = window.localStorage.getItem(key);
    const item = JSON.parse(itemAsString);
    return <T>item;
  }

  removeItem(key) {
    window.localStorage.removeItem(key);
  }
}
