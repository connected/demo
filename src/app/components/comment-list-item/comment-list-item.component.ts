import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Comment } from '../../types';
import gravatarUrl from 'gravatar-url';
import { MatDialog } from '@angular/material/dialog';
import {
  AuthorDialogData,
  CommentAuthorDialogComponent,
} from '../comment-author-dialog/comment-author-dialog.component';

@Component({
  selector: 'comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListItemComponent implements OnInit {
  @Input() comment: Comment = {
    id: NaN,
    author: 'Unknown',
    text: 'No content',
    email: 'unknown',
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  get gravatarUrl() {
    return gravatarUrl(this.comment.email, { size: 80 });
  }

  onAuthorAvatarClick() {
    this.openAuthorDialog();
  }

  openAuthorDialog() {
    const authorDialogData: AuthorDialogData = {
      author: this.comment.author,
      email: this.comment.email,
    };

    this.dialog.open(CommentAuthorDialogComponent, {
      width: '400px',
      data: authorDialogData,
    });
  }
}
