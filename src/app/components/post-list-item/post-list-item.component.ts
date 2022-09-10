import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BlogPost } from '../../types';

@Component({
  selector: 'blog-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListItemComponent implements OnInit {
  @Input() post: BlogPost = {
    id: NaN,
    author: 'Unknown',
    title: 'Untitled',
    previewText: 'No content',
    fullText: 'No content',
  };

  constructor() {}

  ngOnInit(): void {}
}
