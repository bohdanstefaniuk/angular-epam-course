import { Injectable, InjectionToken } from '@angular/core';

export const Random5 = new InjectionToken<string>('Random5');
export const Random10 = new InjectionToken<string>('Random10');

export function GeneratorFactory(n: number) {
  return (generator: GeneratorService): string => {
    return generator.generate(n);
  }
}

@Injectable()
export class GeneratorService {
  chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  charsLength: number = this.chars.length;
  
  constructor() { }

  generate(n: number): string {
    let result = '';
    for (let i = 0; i < n; i++) {
      result += this.getChar();
    }
    return result
  }

  private getChar() {
    let index = Math.floor(Math.random() * this.charsLength);
    return this.chars.charAt(index);
  }
}
