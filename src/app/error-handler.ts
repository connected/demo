import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PageNotFoundError } from './errors';

export type ErrorLocationState = {
  message?: string;
  trace?: string;
};

function isResolverError(error: any): error is UncaughtPromiseError {
  return typeof error === 'object' && error.rejection != null;
}

@Injectable()
export class BlogErrorHandler implements ErrorHandler {
  constructor(private router: Router, private zone: NgZone) {}

  handleError(error: Error | UncaughtPromiseError) {
    const sourceError = isResolverError(error) ? error.rejection : error;
    const targetRoute =
      sourceError instanceof PageNotFoundError ? ['/404'] : ['/500'];

    const locationState: ErrorLocationState = {
      message: sourceError.message,
      trace: sourceError.stack,
    };

    const navigationState: NavigationExtras = { state: locationState };

    this.zone.run(() => {
      this.router
        .navigate(targetRoute, navigationState)
        .catch((error) =>
          console.log('Navigation failed with following error:', error)
        )
        .finally(() => console.log(sourceError));
    });
  }
}
