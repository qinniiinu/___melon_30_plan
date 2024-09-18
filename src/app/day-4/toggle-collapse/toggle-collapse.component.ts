import { Component, computed, model, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IsShowAccordionItemDirective } from '../directives/is-show-accordion-item.directive';
import { ToggleCollapseDirective } from '../directives/toggle-collapse.directive';
import { isShowToggleCollapseBtn } from '../accordion.constants';

@Component({
  selector: 'app-toggle-collapse',
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ToggleCollapseDirective,
    IsShowAccordionItemDirective,
  ],
  templateUrl: './toggle-collapse.component.html',
  styleUrl: './toggle-collapse.component.html'
  })
export class ToggleCollapseComponent {

isShowToggleCollapseBtn = isShowToggleCollapseBtn

accordion = viewChild.required(MatAccordion);
arrayList = model<any[]>(['項目A', '項目B', '項目C', '項目D', '項目D', '項目D', '項目D']);

isExpanded = signal<boolean>(false)
length = computed(() => this.arrayList().length)


}
