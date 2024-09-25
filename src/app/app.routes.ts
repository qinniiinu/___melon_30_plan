import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonThemeComponent } from '../day-1/button-theme/button-theme.component';
import { Day2PageComponent } from '../day-2/day2-page/day2-page.component';
import { Day3PageComponent } from './day-3/day-3-page/day-3-page.component';
import { Day4PageComponent } from './day-4/day-4-page/day-4-page.component';
import { Day5PageComponent } from './day-5/day-5-page/day-5-page.component';
import { Day6PageComponent } from './day-6-page/day-6-page.component';
import { Day8PageComponent } from './day-8/day-8-page/day-8-page.component';
import { Day9PageComponent } from './day9/day-9-page/day-9-page.component';
import { Day10PageComponent } from './day-10/day-10-page/day-10-page.component';
import { Day11PageComponent } from './day-11/day-11-page/day-11-page.component';

export const routes: Routes = [

  {
    path: 'day-1/button-color',
    component: ButtonThemeComponent,

  },
  {
    path: 'day-2/button-debounce',
    component: Day2PageComponent,

  },
  {
    path: 'day-3/dialog',
    component: Day3PageComponent,
  },
  {
    path: 'day-4/toggle',
    component: Day4PageComponent,
  },
  {
    path: 'day-5/screen-width',
    component: Day5PageComponent,
  },
  {
    path: 'day-6/line-pay',
    component: Day6PageComponent,
  },
  // {
  //   path: 'day-7',
  //   component: Day7PageComponent,
  // },
  {
    path: 'day-8/cache',
    component: Day8PageComponent,
  },
  {
    path: 'day-9/timer',
    component: Day9PageComponent,
  },
  {
    path: 'day-10/file-drag',
    component: Day10PageComponent,
  },
  {
    path: 'day-11/ngx-translate',
    component: Day11PageComponent,
  },





];
