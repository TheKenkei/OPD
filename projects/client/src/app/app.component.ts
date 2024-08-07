import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from '@opd/ui';
import {
    TUI_SANITIZER,
    TuiAlertModule,
    TuiDialogModule,
    TuiRootModule,
} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
        LayoutComponent,
        RouterModule,
        TuiAlertModule,
        TuiDialogModule,
        TuiRootModule,
    ],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    styleUrl: './app.component.scss',
})
export class AppComponent {
    public title = 'client';
}
