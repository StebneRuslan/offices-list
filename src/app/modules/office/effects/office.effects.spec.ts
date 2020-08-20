import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import * as officeActions from '../actions/office.actions';
import { OfficeEffects } from './office.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { OfficesState } from '../reducers';
import { OfficeService } from '../../../core/services/office/office.service';
import { OfficeModel } from '../../../shared/models/office.model';

describe('OfficeEffects', () => {
  let actions$: Observable<any>;
  let effects: OfficeEffects;
  let store: MockStore<OfficesState>;
  let officeService: OfficeService;
  const initialState = { officesState: { entities: {}, ids: [] }, error: null };
  const mockedNewOffice = new OfficeModel({ name: 'testName' });
  const mockOfficeService = {
    addOffice: () => of(mockedNewOffice),
    handleSingleOfficeNames: () => mockedNewOffice
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OfficeEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: OfficeService, useValue: mockOfficeService }
      ],
      imports: [
        HttpClientTestingModule
      ]
    });

    effects = TestBed.inject(OfficeEffects);
    store = TestBed.inject(MockStore);
    officeService = TestBed.inject(OfficeService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('addOffice$ should fire office data', () => {
    const addOfficeSpy = spyOn(officeService, 'addOffice').and.callThrough();
    actions$ = of(officeActions.addOffice({ data: mockedNewOffice }));
    effects.addOffice$.subscribe(res => {
      expect(res).toEqual(officeActions.addOfficeSuccess({ data: mockedNewOffice }));
    });
    expect(addOfficeSpy).toHaveBeenCalledTimes(1);
  });
});
