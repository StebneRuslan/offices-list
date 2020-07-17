import { createAction, props, Action } from '@ngrx/store';
import { OfficeModel } from '../../../shared/models/office.model';

export enum OfficeActions {
  Add = '[Offices Component] Add',
  AddOfficeSuccess = '[Offices Api] Add Office Success',
  AddOfficeError = '[Offices Api] Add Office Error',

  Remove = '[Offices Api] Remove',
  RemoveOfficeSuccess = '[Offices Api] Remove Office Success',
  RemoveOfficeError = '[Offices Api] Remove Office Error',

  LoadOffices = '[Offices Api] Load Offices',
  LoadSuccess = '[Offices Api] Load Success',
  LoadError = '[Offices Api] Load Error'
}

// load offices actions
export const loadOffices = createAction(
  OfficeActions.LoadOffices
);

export const officesLoadError = createAction(
  OfficeActions.LoadError,
  props<{ error: any }>()
);

export const officesLoadSuccess = createAction(
  OfficeActions.LoadSuccess,
  props<{ data: OfficeModel[] }>()
);

// add office actions
export const addOfficeSuccess = createAction(
  OfficeActions.AddOfficeSuccess,
  props<{ data: OfficeModel }>()
);

export const addOfficeError = createAction(
  OfficeActions.AddOfficeError,
  props<{ error: any }>()
);

export const addOffice = createAction(
  OfficeActions.Add,
  props<{ data: OfficeModel }>()
);

// remove office actions
export const removeOffice = createAction(
  OfficeActions.Remove,
  props<{ name: string }>()
);

export const removeOfficeSuccess = createAction(
  OfficeActions.RemoveOfficeSuccess,
  props<{ name: string }>()
);

export const removeOfficeError = createAction(
  OfficeActions.RemoveOfficeError,
  props<{ error: any }>()
);

export const updateOffice = createAction(
  OfficeActions.Remove,
  props<{ data: OfficeModel }>()
);
