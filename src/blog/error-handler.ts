import { ErrorHandler, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class BlogErrorHandler implements ErrorHandler {
  constructor(private router: Router) {
  }

  handleError(error: Error) {
    console.log(error)
    this.router.navigate(['/blog/404'])
  }
}
