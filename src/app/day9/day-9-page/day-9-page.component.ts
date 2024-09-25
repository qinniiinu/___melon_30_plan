import { DatePipe } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  model,
  NgZone,
  signal,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-day-9-page',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './day-9-page.component.html',
  styleUrl: './day-9-page.component.scss',
})
export class Day9PageComponent {
  $timer = signal<Date>(new Date());
  $finalTime = signal<Date>(new Date());
  remain = computed(() => {
    const thousandSeconds =
      this.$finalTime().getTime() - this.$timer().getTime();

    return thousandSeconds;
  });

  $isPause = signal<boolean>(true);
  interval!: NodeJS.Timeout;
  modelInput = model<number | string>(100);
  private _snackBar = inject(MatSnackBar);

  constructor() {
    this.initFinalTime(this.modelInput() as number);
    const zone = inject(NgZone);
    zone.runOutsideAngular(() => {
      this.timerStart();
    });

    effect(() => {
      if (this.remain() <= 0) {
        this.openSnackBar('時間到', 'Qaq');
        this.timerPause();
        this.timerReStart();
      }
    });
  }

  timerReStart() {
    this.initFinalTime(this.modelInput() as number);
    this.timerStart()
  }

  private timerStart() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    //一秒一次刷新現在時間
    this.interval = setInterval(() => {
      this.$timer.update(() => new Date());
    }, 1000);
    this.$isPause.set(false);
  }

  private timerPause() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.$isPause.set(true);
  }

  initFinalTime(val: number) {
    const now = new Date(); // 獲取當前時間
    const finalTime = new Date(now.getTime() + val * 1000); //秒數
    this.$finalTime.set(finalTime);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // 暫停中按下
  onPause() {
    if (this.$isPause()) {
      //重新計算結束時間
      this.$finalTime.update((curr) => {
        const newFinalTime = new Date().getTime() + this.remain();
        return new Date(newFinalTime);
      });
      // 重啟計時
      this.$timer.update(() => new Date());
      this.interval = setInterval(() => {
        this.$timer.update(() => new Date());
      }, 1000);
    } else {
      if (this.interval) {
        //清除一秒一次刷新
        clearInterval(this.interval);
      }
    }
    this.$isPause.update((curr) => !curr);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
