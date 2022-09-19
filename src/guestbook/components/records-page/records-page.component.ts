import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  createGuestbookRecord,
  getGuestbookRecords,
} from '../../state/guestbook.reducer';
import { GuestbookRecord, GuestbookRecordFormData } from '../../types';
import { AppState } from "../../../app/state/app.reducer";

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordsPageComponent implements OnInit {
  records: GuestbookRecord[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getGuestbookRecords).subscribe((records) => {
      this.records = records;
    });
  }

  onRecordSubmit(record: GuestbookRecordFormData) {
    this.store.dispatch(
      createGuestbookRecord({
        record: {
          id: Math.round(Math.random() * 1000),
          name: record.name,
          text: record.text,
        },
      })
    );
  }
}
