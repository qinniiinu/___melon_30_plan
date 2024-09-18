import { Directive, effect, ElementRef, HostListener, inject, input, model, Renderer2 } from '@angular/core';
import { isShowToggleCollapseBtn } from '../accordion.constants';

@Directive({
  selector: '[toggleCollapseDirective]',
  standalone: true
})
export class ToggleCollapseDirective {
  length = input<number>(1)
  isExpanded = model<boolean>(false)

  el = inject(ElementRef);
  renderer = inject(Renderer2)
  constructor() {
    effect(() => {
      const element = this.el.nativeElement;
      const text = this.isExpanded() ? '收合' : '展開'

      if (isShowToggleCollapseBtn(this.length())) {
        this.renderer.addClass(element, 'btn-outline')
        this.renderer.setProperty(element, 'innerHTML', text);
      } else {
        this.renderer.removeClass(element, 'btn-outline')
        this.renderer.setProperty(element, 'innerHTML', '');
      }
    })
  }

  @HostListener('click')
  onClick(): void {
    this.isExpanded.update(current => !current)
  }


}

