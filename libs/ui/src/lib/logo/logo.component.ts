import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'opd-logo',
    imports: [CommonModule],
    templateUrl: './logo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './logo.component.scss',
})
export class LogoComponent {}
