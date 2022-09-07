import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { NotFoundError } from "../errors";
import { PostsService } from "../services/posts.service";
import { Observable } from "rxjs";
import { BlogPost } from "../types";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<BlogPost> {
  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Observable<BlogPost>((subscriber) => {
      const postId = parseInt(route.params['id'])
      const post = this.postsService.fetchPost(postId)

      post != null
        ? subscriber.next(post)
        : subscriber.error(new NotFoundError(`Unable to find post with id ${postId}`))
    })
  }
}
