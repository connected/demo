import { Component, OnInit } from '@angular/core';
import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'blog-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss']
})
export class PostListPageComponent implements OnInit {
  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }
}
