import * as fromOffice from './office.actions';

describe('loadOffices', () => {
  it('should return an action', () => {
    expect(fromOffice.loadOffices().type).toBe('[Offices Api] Load Offices');
  });
});
