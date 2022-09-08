import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentFormComponent implements OnInit {
  form = new FormGroup({
    author: new FormControl(undefined, [Validators.required]),
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    text: new FormControl(undefined, [Validators.required])
  }, {
    updateOn: "submit"
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit () {
    if (this.form.valid) {
      // ...
    }
  }
}
