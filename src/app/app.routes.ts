import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonThemeComponent } from '../day-1/button-theme/button-theme.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { Day2PageComponent } from '../day-2/day2-page/day2-page.component';
import { Day3PageComponent } from './day-3/day-3-page/day-3-page.component';
import { Day4PageComponent } from './day-4/day-4-page/day-4-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: CatalogComponent,
        children: [
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
        ]
      },


    ]
  },

];
