import { Injectable } from '@angular/core';
import { Comment } from "../types";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor() { }

  fetchComments(): Comment[] {
    return [
      {
        id: 1,
        email: 'johm.doe@gemail.com',
        author: 'John Doe',
        text: 'My first comment'
      },
      {
        id: 2,
        email: 'mike.tyson@gemail.com',
        author: 'Mike Tyson',
        text: 'My second comment'
      }
    ]
  }
}
