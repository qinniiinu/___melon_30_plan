import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,RouterModule,CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '鐵人賽元件煉成計畫';
}
