import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { BlogErrorHandler } from './error-handler';
import { MatInputModule } from '@angular/material/input';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import { CommentsWidgetComponent } from './components/comments-widget/comments-widget.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentAuthorDialogComponent } from './components/comment-author-dialog/comment-author-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListPageComponent } from './components/post-list-page/post-list-page.component';
import { PostViewPageComponent } from './components/post-view-page/post-view-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    CommentListComponent,
    CommentListItemComponent,
    CommentsWidgetComponent,
    CommentFormComponent,
    CommentAuthorDialogComponent,
    PostListComponent,
    PostListItemComponent,
    PostListPageComponent,
    PostViewPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: BlogErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
