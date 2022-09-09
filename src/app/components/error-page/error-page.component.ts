import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ErrorLocationState } from '../../error-handler';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent implements OnInit {
  errorMessage!: string;
  errorTrace!: string;

  constructor(private location: Location) {}

  ngOnInit(): void {
    const locationState = <ErrorLocationState>this.location.getState();

    this.errorMessage = locationState.message ?? 'Unknown error';
    this.errorTrace = locationState.trace ?? 'No stack trace available';
  }
}
