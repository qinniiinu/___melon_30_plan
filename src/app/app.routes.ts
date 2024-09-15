import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonThemeComponent } from '../day-1/button-theme/button-theme.component';
import { CatalogComponent } from '../catalog/catalog.component';
import path from 'path';

export const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'',
        component:CatalogComponent,
        children:[
          {
            path:'day-1/button-color',
            component:ButtonThemeComponent,

          }
        ]
      },


    ]
  },

];
