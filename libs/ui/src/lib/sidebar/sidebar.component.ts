import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'opd-sidebar',
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
