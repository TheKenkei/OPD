import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'opd-menu',
    imports: [CommonModule],
    templateUrl: './menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './menu.component.scss',
})
export class MenuComponent {}
