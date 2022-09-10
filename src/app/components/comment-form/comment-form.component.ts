import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { CommentsService } from '../../services/comments.service';
import { BlogPost, Comment, CommentFormData } from '../../types';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentFormComponent implements OnInit {
  @Input() postId: BlogPost['id'] = NaN;
  @Output() createCommentEvent = new EventEmitter<Comment>();

  @ViewChild('formElement') formElement!: ElementRef;

  form = this.formBuilder.group(
    {
      author: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required]],
    },
    {
      updateOn: 'submit',
    }
  );

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const formData: CommentFormData = {
      body: this.form.value.text!,
      email: this.form.value.email!,
      name: this.form.value.author!,
    };

    this.form.disable();

    this.commentsService
      .createComment(this.postId, formData)
      .subscribe((comment) => {
        this.createCommentEvent.emit(comment);

        this.form.enable();
        this.form.reset();

        this.formElement.nativeElement.reset();
      });
  }
}
