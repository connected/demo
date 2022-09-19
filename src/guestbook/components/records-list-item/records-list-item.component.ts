import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { GuestbookRecord } from '../../types';

@Component({
  selector: 'guestbook-records-list-item',
  templateUrl: './records-list-item.component.html',
  styleUrls: ['./records-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordsListItemComponent implements OnInit {
  @Input() record: GuestbookRecord = {
    id: NaN,
    name: 'Unknown',
    text: 'No content',
  };

  constructor() {}

  ngOnInit(): void {}
}
