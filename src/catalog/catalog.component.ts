import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: `./catalog.component.html`,
  styleUrl: './catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  routerList = RouterList
}

interface IRouterItem {
  link: string
  text: string
  class: string
}

export const RouterList: IRouterItem[] = [
  { link: '/day-1/button-color', text: '1 theme', class: 'primary' },
  { link: '/day-2/button-debounce', text: '2 按鈕debounce', class: 'primary' },
  { link: '/day-3/dialog', text: '3 Dialog', class: 'secondary' },
  { link: '/day-4/toggle', text: '4 toggleDirective', class: 'secondary' },
  { link: '/day-5/screen-width', text: '5 螢幕尺吋', class: 'accent' },
  { link: '/day-6/line-pay', text: '6 line pay', class: '' },
]
