import { Injectable } from '@angular/core';
import { BlogPost, JpBlogPost } from '../types';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const RANDOM_AUTHORS = [
  'Math Blank',
  'Oris Lega',
  'Dino Paths',
  'Noris Jsonson',
  'Emma Walson',
];

function jpBlogPostToBlogPost(jpBlogPost: JpBlogPost): BlogPost {
  return {
    id: jpBlogPost.id,
    author: RANDOM_AUTHORS[jpBlogPost.id % RANDOM_AUTHORS.length],
    title: jpBlogPost.title[0].toUpperCase() + jpBlogPost.title.substring(1),
    fullText: jpBlogPost.body,
    previewText: jpBlogPost.body.substring(0, 300).trim() + '...',
  };
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  fetchPost(postId: BlogPost['id']) {
    return this.http
      .get<JpBlogPost>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .pipe(map((jsBlogPost) => jpBlogPostToBlogPost(jsBlogPost)));
  }

  fetchPosts() {
    return this.http
      .get<JpBlogPost[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((jsBlogPosts) =>
          jsBlogPosts
            .slice(0, 5)
            .map((jsBlogPost) => jpBlogPostToBlogPost(jsBlogPost))
        )
      );
  }
}
