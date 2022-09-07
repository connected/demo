import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { BlogPost } from "../../types";

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  @Input() blogPosts: BlogPost[] = []

  constructor() { }

  ngOnInit(): void {

  }
}
