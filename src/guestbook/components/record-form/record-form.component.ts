import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { GuestbookRecordFormData } from '../../types';

@Component({
  selector: 'guestbook-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<GuestbookRecordFormData>();
  @ViewChild('formElement') formElement!: ElementRef;

  form = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      text: ['', [Validators.required]],
    },
    {
      updateOn: 'submit',
    }
  );

  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const formData: GuestbookRecordFormData = {
      name: this.form.value.name!,
      text: this.form.value.text!,
    };

    this.form.reset()
    this.formElement.nativeElement.reset()

    this.submitEvent.emit(formData);
  }
}
