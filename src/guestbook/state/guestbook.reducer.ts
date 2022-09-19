import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { GuestbookRecord } from '../types';
import { AppState } from '../../app/state/app.reducer';

type GuestbookState = AppState & {
  records: GuestbookRecord[];
};

function description(actionDescription: TemplateStringsArray) {
  return `[Guestbook] ${actionDescription}`;
}

export const getGuestbookFeatureState =
  createFeatureSelector<GuestbookState>('guestbook');
export const getGuestbookRecords = createSelector(
  getGuestbookFeatureState,
  (state) => state.records
);

export const createGuestbookRecord = createAction(
  description`Create record`,
  props<{ record: GuestbookRecord }>()
);

export const guestbookReducer = createReducer<GuestbookState>(
  {
    records: [],
  },
  on(createGuestbookRecord, (state, action) => ({
    ...state,
    records: [...state.records, action.record],
  }))
);
