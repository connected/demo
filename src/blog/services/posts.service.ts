import { Injectable } from '@angular/core';
import { BlogPost } from "../types";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor() { }

  fetchPost (postId: BlogPost['id']): BlogPost | null {
    return this.fetchPosts().find(post => post.id === postId) ?? null
  }

  fetchPosts(): BlogPost[] {
    return [
      {
        id: 1,
        author: 'Andrew Zilin',
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        fullText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cumque distinctio enim harum in incidunt magnam, neque odio praesentium quasi repellendus velit voluptates. Corporis eum ipsam numquam optio vitae.',
        title: 'Lorem ipsum'
      },
      {
        id: 2,
        author: 'Andrew Zilin',
        previewText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        fullText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cumque distinctio enim harum in incidunt magnam, neque odio praesentium quasi repellendus velit voluptates. Corporis eum ipsam numquam optio vitae.',
        title: 'Lorem ipsum'
      }
    ]
  }
}
