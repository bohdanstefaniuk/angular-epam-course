import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  constructor(public appName: string, public ver: string) {}
}

export const appConstants = new ConstantService('AppleShop', '1.0');
