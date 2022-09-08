import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { PageNotFoundError } from "./errors";

@Injectable()
export class BlogErrorHandler implements ErrorHandler {
  constructor(private router: Router) {
  }

  handleError(error: Error) {
    if (error instanceof PageNotFoundError) {
      this.router.navigate(['/blog/404'])
    } else {
      console.log(error)
    }
  }
}
