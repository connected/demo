import { ErrorHandler, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListPageComponent } from './components/post-list-page/post-list-page.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button";
import { Route, RouterModule } from "@angular/router";
import { PostViewPageComponent } from './components/post-view-page/post-view-page.component';
import { PostsService } from "./services/posts.service";
import { BlogErrorHandler } from "../app/error-handler";
import { PostResolver } from "./resolvers/post.resolver";
import { NotFoundPageComponent } from '../app/components/not-found-page/not-found-page.component';
import { CommentsModule } from "../comments/comments.module";

const routes: Route[] = [
  {
    path: 'blog',
    component: PostListPageComponent
  },
  {
    path: 'blog/posts/:id',
    component: PostViewPageComponent,
    resolve: {
      post: PostResolver
    }
  }
]

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
    PostListPageComponent,
    PostViewPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    CommentsModule
  ],
  providers: [
    PostsService
  ]
})
export class BlogModule { }
