import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import { CommentsWidgetComponent } from './components/comments-widget/comments-widget.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    CommentListComponent,
    CommentListItemComponent,
    CommentsWidgetComponent,
    CommentFormComponent
  ],
  exports: [
    CommentListComponent,
    CommentsWidgetComponent
  ],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class CommentsModule { }
