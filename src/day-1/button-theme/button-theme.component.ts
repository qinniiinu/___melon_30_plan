import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ThemeColorDirective } from './theme-color.directive';
import { ThemeControlService } from './theme-control.service';

@Component({
  selector: 'app-button-theme',
  standalone: true,
  imports: [
    CommonModule,ThemeColorDirective
  ],
  templateUrl:'./button-theme.component.html',
  styleUrl: './button-theme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonThemeComponent {

  themeControlService = inject(ThemeControlService)
  theme = this.themeControlService.getTheme()

  switchTheme(theme: string) {
    this.themeControlService.setTheme(theme);
  }
}
