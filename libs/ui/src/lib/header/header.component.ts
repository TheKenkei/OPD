import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSearchComponent } from '../header-search/header-search.component';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'opd-header',
  standalone: true,
  imports: [CommonModule, HeaderSearchComponent, MenuComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
