import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { GuestbookRecord } from '../../types';

@Component({
  selector: 'guestbook-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordsListComponent implements OnInit {
  @Input() records: GuestbookRecord[] = [];

  constructor() {}

  ngOnInit(): void {}
}
