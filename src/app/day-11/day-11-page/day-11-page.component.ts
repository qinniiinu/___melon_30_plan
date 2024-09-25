import { Component, inject } from '@angular/core';
import {
  TranslateModule,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-day-11-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './day-11-page.component.html',
  styleUrl: './day-11-page.component.scss',
})
export class Day11PageComponent {
  _translate = inject(TranslateService);
  translate(lang: string) {
    this._translate.use(lang);
  }
}
