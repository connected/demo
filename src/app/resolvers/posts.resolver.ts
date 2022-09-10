import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PostsResolver implements Resolve<Observable<BlogPost[]>> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // @todo Implement error handler
    return this.postsService.fetchPosts();
  }
}
