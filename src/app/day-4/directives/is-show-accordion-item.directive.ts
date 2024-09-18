import { Directive, effect, ElementRef, inject, input, model, Renderer2 } from '@angular/core';
import { isShowToggleCollapseBtn } from '../accordion.constants';

@Directive({
  selector: '[IsShowAccordionItem]',
  standalone: true
})
export class IsShowAccordionItemDirective {
  index = input.required<number>()
  total = input.required<number>()
  isExpanded = model.required<boolean>()
  el = inject(ElementRef)
  renderer = inject(Renderer2)
  constructor() {
    effect(() => {
      if (isShowToggleCollapseBtn(this.index())) {
        return
      }
      const element = this.el.nativeElement
      if (this.isExpanded() && isShowToggleCollapseBtn(this.total())) {
        this.renderer.removeClass(element, 'hidden')
        this.renderer.addClass(element, 'block')
      }
      else {
        this.renderer.removeClass(element, 'block')
        this.renderer.addClass(element, 'hidden')

      }
    })
  }

}
