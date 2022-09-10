import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PostListPageComponent } from './components/post-list-page/post-list-page.component';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostViewPageComponent } from './components/post-view-page/post-view-page.component';
import { PostResolver } from './resolvers/post.resolver';
import { PostCommentsResolver } from './resolvers/post-comments.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/posts',
  },
  {
    path: 'posts',
    pathMatch: 'full',
    component: PostListPageComponent,
    resolve: {
      posts: PostsResolver,
    },
  },
  {
    path: 'posts/:id',
    pathMatch: 'full',
    component: PostViewPageComponent,
    resolve: {
      post: PostResolver,
      comments: PostCommentsResolver,
    },
  },
  {
    path: '404',
    pathMatch: 'full',
    component: NotFoundPageComponent,
  },
  {
    path: '500',
    pathMatch: 'full',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
