import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatalogComponent } from '../catalog/catalog.component';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '鐵人賽元件煉成計畫';
  _translate = inject(TranslateService);
  platformId = inject(PLATFORM_ID); //A token that indicates an opaque platform ID.

  constructor() {
    // 預設語系
    this._translate.setDefaultLang('zh-TW');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this._translate.use('en-US');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // 確認只在瀏覽器環境中執行 navigator 的邏輯判斷否在瀏覽器端運行

    if (isPlatformBrowser(this.platformId)) {
      console.log(navigator);  // 確認瀏覽器中可用
      const browserLang = navigator.language; // 抓取瀏覽器語言
      console.log(`瀏覽器語言: ${browserLang}`);
      // 可以根據瀏覽器語言自動設定翻譯語系
    }  }
}
