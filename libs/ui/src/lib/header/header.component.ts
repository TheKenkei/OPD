import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {HeaderSearchComponent} from '../header-search/header-search.component';
import {LogoComponent} from '../logo/logo.component';
import {MenuComponent} from '../menu/menu.component';

@Component({
    standalone: true,
    selector: 'opd-header',
    imports: [CommonModule, HeaderSearchComponent, LogoComponent, MenuComponent],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './header.component.scss',
})
export class HeaderComponent {}
