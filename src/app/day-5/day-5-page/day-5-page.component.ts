import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  HostListener,
  Inject,
  inject,
  runInInjectionContext,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import {
  BroadcastWidthService,
  ScreenSize,
  sizeRecord,
} from '../broadcast-width.service';

@Component({
  selector: 'app-day-5-page',
  standalone: true,
  imports: [],
  templateUrl: './day-5-page.component.html',
  styleUrl: './day-5-page.component.scss',
})
export class Day5PageComponent {
  // signalIsSmall: Signal<boolean | undefined>
  // private breakPoint = inject(BreakpointObserver)

  // constructor() {
  //   this.signalIsSmall = toSignal(
  //     this.breakPoint.observe(Breakpoints.Small).pipe(
  //       tap((res) => console.log(res)),
  //       //   {
  //       //     "matches": true,
  //       //     "breakpoints": {
  //       //         "(min-width: 600px) and (max-width: 959.98px)": true
  //       //     }
  //       // }
  //       map((res) => {
  //         return !!(res.matches)
  //       })
  //     )
  //   )
  // }

  public signalWidth: WritableSignal<ScreenSize | null> =
    signal<ScreenSize | null>(null);

  resize = inject(BroadcastWidthService);

  @HostListener('window:resize', ['$event'])
  onResize($event: any) {
    const screenWidth = $event.target.innerWidth;
    switch (true) {
      case sizeRecord[ScreenSize.S](screenWidth):
        this.signalWidth.set(ScreenSize.S);
        break;
      case sizeRecord[ScreenSize.M](screenWidth):
        this.signalWidth.set(ScreenSize.M);
        break;
      case sizeRecord[ScreenSize.L](screenWidth):
        this.signalWidth.set(ScreenSize.L);
        break;
    }
  }
}
