import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'opd-header-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearchComponent {}
