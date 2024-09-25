import {
  AfterViewInit,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Input,
  Renderer2,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appThemeColor]',
  standalone: true,
})
export class ThemeColorDirective  {
  appThemeColor = input<string>('');

  elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  constructor() {
    effect(() => {
      this.applyThemeColor(this.appThemeColor());
    });
  }

  private applyThemeColor(colorTheme: string | null) {
    if (colorTheme) {
      this.renderer.addClass(this.elementRef.nativeElement, colorTheme);
    }
  }
}
