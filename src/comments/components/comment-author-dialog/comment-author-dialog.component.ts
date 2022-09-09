import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import gravatarUrl from 'gravatar-url';

export type AuthorDialogData = {
  author: string;
  email: string;
};

@Component({
  selector: 'app-comment-author-dialog',
  templateUrl: './comment-author-dialog.component.html',
  styleUrls: ['./comment-author-dialog.component.scss'],
})
export class CommentAuthorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CommentAuthorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AuthorDialogData
  ) {}

  get gravatarUrl() {
    return gravatarUrl(this.data.email, { size: 80 });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onCloseButtonClick() {
    this.dialogRef.close();
  }
}
