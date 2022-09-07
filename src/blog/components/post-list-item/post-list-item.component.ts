import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent implements OnInit {
  @Input() public author: string = 'Unknown'
  @Input() public title: string = 'Untitled'
  @Input() public text: string = 'No content'

  constructor() { }

  ngOnInit(): void {

  }
}
