import { DatePipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

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
  remain = computed(
    () => {
      const thousandSeconds = this.$finalTime().getTime() - this.$timer().getTime()
      return thousandSeconds
    }
  );
  interval: NodeJS.Timeout;
  constructor() {
    this.initFinalTime()
      this.interval = setInterval(() => {
        this.$timer.update(()=>new Date());
      }, 1000);
  }

  initFinalTime() {
    const now = new Date(); // 獲取當前時間
    const finalTime = new Date(now.getTime() + 30 * 60000); //30 分鐘後時間
    this.$finalTime.set(finalTime);
  }

  ngOnDestroy(): void {
    if(this.interval ){
      clearInterval(this.interval)
    }
  }
}
