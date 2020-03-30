import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { LocalStorageService } from './local-storage.service';

const authStorageKey = 'auth-is-authorized';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserAuthorized: boolean;
  private accounts = new Array<Account>();

  constructor(
    private storage: LocalStorageService
  ) {
    const account = new Account('admin', 'admin');
    this.accounts.push(account);
    this.isUserAuthorized = storage.getItem(authStorageKey) || false;
  }

  logIn(login: string, password: string) {
    const account = this.accounts.find((item) => item.login === login && item.password === password);
    if (account) {
      this.storage.setItem(authStorageKey, true);
      this.isUserAuthorized = true;
    }
  }

  logOut() {
    this.storage.removeItem(authStorageKey);
    this.isUserAuthorized = false;
  }
}
