import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost, BlogPostWithComments, Comment } from '../../types';

@Component({
  selector: 'app-post-view-page',
  templateUrl: './post-view-page.component.html',
  styleUrls: ['./post-view-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostViewPageComponent implements OnInit {
  comments: Comment[] = [];
  post: BlogPost = {
    id: NaN,
    author: 'Unknown',
    title: 'Untitled',
    previewText: 'No content',
    fullText: 'No content',
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { post, comments } = <BlogPostWithComments>(
      this.activatedRoute.snapshot.data
    );

    this.post = post;
    this.comments = comments;
  }
}
