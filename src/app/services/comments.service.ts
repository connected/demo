import { Injectable } from '@angular/core';
import { Comment, CommentFormData, JpComment } from '../types';
import { BlogPost } from '../types';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

function jpCommentToComment(jpComment: JpComment): Comment {
  return {
    author: jpComment.email.split('@')[0],
    email: jpComment.email,
    id: jpComment.id,
    text: jpComment.body,
  };
}

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  fetchComments(postId: BlogPost['id']) {
    return this.http
      .get<JpComment[]>(
        `http://jsonplaceholder.typicode.com/posts/${postId}/comments`
      )
      .pipe(
        map((jpComments) =>
          jpComments.map((jpComment) => jpCommentToComment(jpComment))
        )
      );
  }

  createComment(postId: BlogPost['id'], data: CommentFormData) {
    return (
      this.http
        .post<Comment>(
          `http://jsonplaceholder.typicode.com/posts/${postId}/comments`,
          data
        )
        // Mock new comment in response
        .pipe(
          map<Comment, Comment>(() => ({
            id: Math.round(Math.random() * 1000),
            text: data.body,
            author: data.name,
            email: data.email,
          }))
        )
    );
  }
}
