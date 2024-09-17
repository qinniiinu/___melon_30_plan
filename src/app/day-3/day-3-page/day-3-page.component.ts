import { Component, inject, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-day-3-page',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './day-3-page.component.html',
  styleUrl: './day-3-page.component.scss'
})
export class Day3PageComponent {
  readonly dialog = inject(MatDialog);
  @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;
  @ViewChild('actionTemplate') actionTemplate!: TemplateRef<any>;

  openDialog() {
    const templateConfig: MatDialogConfig<IDialogTemplate> = {
      data: {
        headerTemplate: this.headerTemplate,
        contentTemplate: this.contentTemplate,
        actionTemplate: this.actionTemplate,
      }
    }
    this.dialog.open(DialogComponent,
      templateConfig
    ).afterClosed;
  }

  onConfirm() {
    console.log('哇哈哈')
  }

}

export interface IDialogTemplate {
  headerTemplate?: TemplateRef<any>;
  contentTemplate?: TemplateRef<any>;
  actionTemplate?: TemplateRef<any>;
}

