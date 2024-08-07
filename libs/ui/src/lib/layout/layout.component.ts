import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {HeaderComponent} from '../header/header.component';

@Component({
    standalone: true,
    selector: 'opd-layout',
    imports: [CommonModule, HeaderComponent],
    templateUrl: './layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
