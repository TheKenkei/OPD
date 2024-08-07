import type {ApplicationConfig} from '@angular/core';
import {importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {TuiRootModule} from '@taiga-ui/core';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(appRoutes),
        importProvidersFrom(TuiRootModule),
    ],
};
