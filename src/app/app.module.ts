import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { BlogModule } from "../blog/blog.module";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { BlogErrorHandler } from "./error-handler";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BlogModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: BlogErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
