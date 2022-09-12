import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { createGuestbookRecord, getGuestbookRecords } from "../../state/guestbook.reducer";
import { GuestbookRecord } from "../../types";

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordsPageComponent implements OnInit {
  records: GuestbookRecord[] = []

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(createGuestbookRecord({
      id: 1,
      name: 'Andrew',
      email: 'test@test.lv',
      text: 'Some comment text'
    }))

    this.store.dispatch(createGuestbookRecord({
      id: 2,
      name: 'Andrew',
      email: 'test@test.lv',
      text: 'Some comment text'
    }))

    this.store.select(getGuestbookRecords).subscribe((records) => {
      this.records = records
    })
  }
}
