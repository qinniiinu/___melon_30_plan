import { Directive, effect, ElementRef, Input, Renderer2, signal } from '@angular/core';

@Directive({
  selector: '[appThemeControl]',
  standalone: true
})
export class ThemeControlDirective {
  private themeColorSignal = signal<string | null>(null);


  @Input('appThemeColor') set themeColor(value: string) {
    this.themeColorSignal.set(value);
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    effect(() => {
      this.applyThemeColor(this.themeColorSignal());
    });
  }

  private applyThemeColor(colorTheme: string | null) {
    if (colorTheme) {
      this.renderer.addClass(this.elementRef.nativeElement, colorTheme);
    }
  }

}
