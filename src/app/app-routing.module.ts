import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListPageComponent } from "../blog/components/post-list-page/post-list-page.component";

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
