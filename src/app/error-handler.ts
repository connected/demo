import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { PageNotFoundError } from "../blog/errors";

function isResolverError (error: any): error is UncaughtPromiseError {
  return typeof error === 'object' && error.rejection != null
}

@Injectable()
export class BlogErrorHandler implements ErrorHandler {
  constructor(private router: Router) {
  }

  handleError(error: Error) {
    const sourceError = isResolverError(error) ? error.rejection : error
    const targetRoute = sourceError instanceof PageNotFoundError
      ? ['/400']
      : ['/500'];

    this.router.navigate(targetRoute)
      .catch(() => console.log('Navigation failed in error handler.'))
  }
}
