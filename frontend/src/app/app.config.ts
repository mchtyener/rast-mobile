import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";

import {errorInterceptor,} from "./core/interceptor/error.interceptor";
import {headerInterceptor} from "./core/interceptor/header.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([errorInterceptor, headerInterceptor]))]
};
