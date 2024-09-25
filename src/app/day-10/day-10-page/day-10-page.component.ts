import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-day-10-page',
  standalone: true,
  imports: [],
  templateUrl: './day-10-page.component.html',
  styleUrl: './day-10-page.component.scss'
})
export class Day10PageComponent {
  dragging = signal(false);    // 追蹤拖放狀態
  fileName = signal<string | null>(null);  // 儲存檔案名稱

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragging.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dragging.set(false);
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    this.dragging.set(false);

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileName.set(files[0].name);  // 設定上傳檔案名稱
    }
  }
}
