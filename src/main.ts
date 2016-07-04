import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/Rx';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app/app.component.ts';
import {enableProdMode} from "@angular/core";

if (app.environment === 'production') {
    enableProdMode();
}
bootstrap(<any>AppComponent);