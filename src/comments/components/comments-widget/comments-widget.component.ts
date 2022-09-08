import { Component, OnInit } from '@angular/core';
import { CommentsService } from "../../services/comments.service";

@Component({
  selector: 'comments-widget',
  templateUrl: './comments-widget.component.html',
  styleUrls: ['./comments-widget.component.scss']
})
export class CommentsWidgetComponent implements OnInit {
  constructor(public commentsService: CommentsService) { }

  ngOnInit(): void {
  }
}
