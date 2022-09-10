import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
})
export class PostListPageComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ posts }) => {
      this.blogPosts = posts;
    });
  }
}
