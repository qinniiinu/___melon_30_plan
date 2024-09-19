import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonThemeComponent } from '../day-1/button-theme/button-theme.component';
import { Day2PageComponent } from '../day-2/day2-page/day2-page.component';
import { Day3PageComponent } from './day-3/day-3-page/day-3-page.component';
import { Day4PageComponent } from './day-4/day-4-page/day-4-page.component';
import { Day5PageComponent } from './day-5/day-5-page/day-5-page.component';
import { Day6PageComponent } from './day-6-page/day-6-page.component';

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
    path: 'day-6/linePay',
    component: Day6PageComponent,
  },


];
