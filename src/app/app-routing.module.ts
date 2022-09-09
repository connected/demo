import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blog',
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '500',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
