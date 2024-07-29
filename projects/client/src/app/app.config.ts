import {provideAnimations} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core';
import {
    ApplicationConfig,
    provideZoneChangeDetection,
    importProvidersFrom,
} from '@angular/core';
import {provideRouter} from '@angular/router';
import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideZoneChangeDetection({
            eventCoalescing: true,
        }),
        provideRouter(appRoutes),
        importProvidersFrom(TuiRootModule),
    ],
};
