import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Comment } from "../../types";

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit {
  @Input() comments: Comment[] = []

  constructor() { }

  ngOnInit(): void {
  }
}
