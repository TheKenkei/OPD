import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'lib-core',
    imports: [CommonModule],
    templateUrl: './core.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './core.component.css',
})
export class CoreComponent {}
