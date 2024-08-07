import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'opd-header-search',
    imports: [CommonModule],
    templateUrl: './header-search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './header-search.component.scss',
})
export class HeaderSearchComponent {}
