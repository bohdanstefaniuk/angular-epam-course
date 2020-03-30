import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem(key, item) {
    const itemValue = JSON.stringify(item);
    window.localStorage.setItem(key, itemValue);
  }

  getItem<T>(key): T {
    const itemAsString = window.localStorage.getItem(key);
    const item = JSON.parse(itemAsString);
    return item as T;
  }

  removeItem(key) {
    window.localStorage.removeItem(key);
  }
}
