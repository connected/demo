import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordFormComponent } from './components/record-form/record-form.component';
import { RecordsPageComponent } from './components/records-page/records-page.component';
import { RecordsListComponent } from './components/records-list/records-list.component';
import { RecordsListItemComponent } from './components/records-list-item/records-list-item.component';
import { GuestbookRoutingModule } from "./guestbook-routing.module";
import { StoreModule } from "@ngrx/store";
import { guestbookReducer } from "./state/guestbook.reducer";

@NgModule({
  declarations: [
    RecordFormComponent,
    RecordsPageComponent,
    RecordsListComponent,
    RecordsListItemComponent
  ],
  imports: [
    CommonModule,
    GuestbookRoutingModule,
    StoreModule.forFeature('guestbook', guestbookReducer)
  ],
})
export class GuestbookModule { }
