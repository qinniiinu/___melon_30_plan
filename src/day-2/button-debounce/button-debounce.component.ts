import { AfterViewInit, Component, computed, ElementRef, inject, Injector, input, runInInjectionContext, Signal, signal, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-button-debounce',
  standalone: true,
  imports: [],
  templateUrl: './button-debounce.component.html',
  styleUrl: './button-debounce.component.scss'
})
export class ButtonDebounceComponent {
  @ViewChild('btn') btn!: ElementRef
  buttonText = signal<string>('我是按鈕')
  debounceInput = input<number>(0)

  buttonClick: Signal<any> | null = null

  private readonly injector = inject(Injector);
  count = 0; //計數器
  timer: any
  ngAfterViewInit() {
    runInInjectionContext(this.injector, () => {
      if (this.btn) {
        this.buttonClick = toSignal(
          fromEvent(this.btn.nativeElement, 'click')
            .pipe(
              tap(() => {
                console.log('睡不飽拉')
              }),
              // debounceTime(this.debounceInput()),
              // tap(()=> this.count++)
              tap(()=>{
                this._debounce()
              })
            ),
          { initialValue: '阿拉花瓜' } //設定初始值
        );
      } else {
        console.error('Button element is not yet available');
      }
    });
  }

  private _debounce(): void {
    console.log('Debounce triggered');
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      console.log('Count incremented');
      this.count++;
    }, this.debounceInput());
  }
}
