import {TestBed, tick} from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as officesReducers from '../reducers/index';
import * as officesActions from '../actions/office.actions';
import * as officesSelectors from '../selectors/offices.selectors';
import { OfficeModel } from '../../../shared/models/office.model';

describe('Offices Selectors', () => {
  let store: Store<officesReducers.OfficesState>;
  const officesMock = [
    new OfficeModel({ name: 'first' }),
    new OfficeModel({ name: 'second' }),
    new OfficeModel({ name: 'thirds' })
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          officesState: officesReducers.officesReducers
        })
      ]
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('get offices entities', () => {
    it('should return offices', () => {
      let result;
      store
        .select(officesSelectors.selectAllOffices)
        .subscribe(value => {
          result = value;
        });
      expect(result).toEqual([]);
      store.dispatch(officesActions.officesLoadSuccess({ data: officesMock }));
      expect(result).toEqual(officesMock);
    });
  });
});
