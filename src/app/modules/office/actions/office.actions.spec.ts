import * as fromOffice from './office.actions';

describe('loadOffices', () => {
  it('should return an action', () => {
    expect(fromOffice.loadOffices().type).toBe('[Office] Load Offices');
  });
});
