import { createAction, props, Action } from '@ngrx/store';
import { OfficeModel } from '../../../shared/models/office.model';

export enum OfficeActions {
  Add = '[Offices Component] Add',
  Remove = '[Offices Component] Remove'
}

export const addOffice = createAction(
  OfficeActions.Add,
  props<{ data: OfficeModel }>()
);

export const removeOffice = createAction(
  OfficeActions.Remove,
  props<{ key: string }>()
);

export const updateOffice = createAction(
  OfficeActions.Remove,
  props<{ data: OfficeModel }>()
);
