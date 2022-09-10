import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BlogPost, Comment } from '../../types';

@Component({
  selector: 'comments-widget',
  templateUrl: './comments-widget.component.html',
  styleUrls: ['./comments-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsWidgetComponent implements OnInit {
  @Input() postId: BlogPost['id'] = NaN;
  @Input() comments: Comment[] = [];

  constructor() {}

  ngOnInit(): void {}

  onCreateComment(comment: Comment) {
    // Not sure if this is legit to assign to @Input() prop.
    this.comments = [...this.comments, comment];
  }
}
