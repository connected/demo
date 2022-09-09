import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from '../../comments/types';
import { CommentsService } from '../../comments/services/comments.service';

@Injectable({
  providedIn: 'root',
})
export class PostCommentsResolver implements Resolve<Observable<Comment[]>> {
  constructor(private commentsService: CommentsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.commentsService.fetchComments(route.params['id']);
  }
}
