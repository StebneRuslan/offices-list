import * as fromOffice from './office.actions';
import { OfficeModel } from '../../../shared/models/office.model';

describe('loadOffices', () => {
  describe('Load offices actions', () => {
    it('LoadOffices should return an action', () => {
      expect(fromOffice.loadOffices().type).toBe(fromOffice.OfficeActions.LoadOffices);
    });
    it('officesLoadSuccess should return an action with data', () => {
      const newOfficeData = new OfficeModel();
      const action = fromOffice.officesLoadSuccess({ data: [newOfficeData] });
      expect({ ...action }).toEqual({
        type: fromOffice.OfficeActions.LoadSuccess,
        data: [newOfficeData]
      });
    });
  });

  describe('Add office actions', () => {
    it('addOffice should return an action with data', () => {
      const newOfficeData = new OfficeModel();
      const action = fromOffice.addOffice({ data: newOfficeData });
      expect({ ...action }).toEqual({
        type: fromOffice.OfficeActions.Add,
        data: newOfficeData
      });
    });

    it('addOfficeSuccess should return an action with data', () => {
      const newOfficeData = new OfficeModel();
      const action = fromOffice.addOfficeSuccess({ data: newOfficeData });
      expect({ ...action }).toEqual({
        type: fromOffice.OfficeActions.AddOfficeSuccess,
        data: newOfficeData
      });
    });
  });
});
