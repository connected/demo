import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostListPageComponent } from './components/post-list-page/post-list-page.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
    PostListPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class BlogModule { }
