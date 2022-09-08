import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Comment } from "../../types";
import gravatarUrl from "gravatar-url";

@Component({
  selector: 'comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListItemComponent implements OnInit {
  @Input() comment: Comment = {
    id: NaN,
    author: 'Unknown',
    text: 'No content',
    email: 'unknown'
  }

  constructor() { }

  ngOnInit(): void {
  }

  get gravatarUrl () {
    return gravatarUrl(this.comment.email, { size: 80 })
  }
}
