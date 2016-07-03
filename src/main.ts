import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';

import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {AppComponent} from './app/app.component.ts';

bootstrap(<any>AppComponent,[
    disableDeprecatedForms(),
    provideForms()
]);  