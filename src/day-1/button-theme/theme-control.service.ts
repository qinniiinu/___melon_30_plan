import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeControlService {
  private themeSignal = signal<string>('');

  constructor() { }

  setTheme(theme: string) {
    const currentTheme = this.themeSignal();
    if (currentTheme && currentTheme !== theme) {
      document.body.classList.remove(currentTheme);
    }
    if (theme) {
      document.body.classList.add(theme);
      this.themeSignal.set(theme);
    }
  }


  getTheme() {
    return this.themeSignal.asReadonly();
  }
}
