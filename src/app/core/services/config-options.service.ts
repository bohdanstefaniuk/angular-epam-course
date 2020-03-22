import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Options } from '../models/options.module';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  optionsKey = "app-options";
  options: Options;

  constructor(private localStorage: LocalStorageService) {
    const options: Options = localStorage.getItem(this.optionsKey);
    if (options != null) {
      this.options = options;
    } else {
      this.options = new Options();
    }
  }

  setOptions(options: Partial<{id: number, login: string, email: string}>) {
    this.options.id = options.id || this.options.id;
    this.options.login = options.login || this.options.login;
    this.options.email = options.email || this.options.email;
    this.localStorage.setItem("app-options", this.options);
  }

  getOptions(): Options {
    return this.options;
  }
}
