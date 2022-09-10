import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { PostsService } from '../services/posts.service';
import { BlogPost } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<BlogPost> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // @todo Implement error handler
    return this.postsService.fetchPost(route.params['id']);
  }
}
