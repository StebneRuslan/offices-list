import * as officeReducers from './index';
import * as officeActions from '../actions/office.actions';
import { Action } from '@ngrx/store';
import { OfficeModel } from '../../../shared/models/office.model';

describe('OfficeReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialOfficesState } = officeReducers;
      const action: Action = { type: undefined };
      const state = officeReducers.officesReducers(initialOfficesState, action);
      expect(state).toEqual(initialOfficesState);
    });
  });
  describe('LOAD OFFICES action', () => {
    it('should return offices', () => {
      const { initialOfficesState } = officeReducers;
      const action = officeActions.officesLoadSuccess({ data: [{ ...new OfficeModel(), name: 'test'}] });
      const state = officeReducers.officesReducers(initialOfficesState, action);
      expect(state.error).toEqual(null);
      expect(state.entities.hasOwnProperty('test')).toEqual(true);
      expect(state.ids.length).toEqual(1);
    });
  });
});
