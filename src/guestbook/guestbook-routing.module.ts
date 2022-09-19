import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsPageComponent } from './components/records-page/records-page.component';

const routes: Routes = [
  {
    path: 'guestbook',
    pathMatch: 'full',
    component: RecordsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestbookRoutingModule {}
