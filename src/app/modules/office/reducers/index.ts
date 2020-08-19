import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { OfficeModel } from '../../../shared/models/office.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  addOffice,
  officesLoadSuccess,
  removeOfficeSuccess, addOfficeSuccess, removeOffice, updateOfficeSuccess, addOfficeError
} from '../actions/office.actions';

export const officesStateFeatureKey = 'officesState';

export interface OfficesState extends EntityState<OfficeModel> {

}

export const adapter = createEntityAdapter<OfficeModel>({
  selectId: (model: OfficeModel) => model.name
});

export const initialOfficesState = adapter.getInitialState({
  error: null
});

export const officesReducers = createReducer(
  initialOfficesState,
  on(officesLoadSuccess, (state, action) => adapter.addMany(action.data, { ...state, error: null })),
  on(addOfficeSuccess, (state, action) => adapter.addOne(action.data, { ...state, error: null })),
  on(removeOfficeSuccess, (state, action) => adapter.removeOne(action.name, { ...state, error: null })),
  on(updateOfficeSuccess, (state, action) => adapter.updateOne({
    id: action.data.name,
    changes: action.data
  }, { ...state, error: null })),
  on(addOfficeError, (state, action) => {
    return { ...state, error: action.error };
  }),
);


export const metaReducers: MetaReducer<OfficesState>[] = !environment.production ? [] : [];

export const { selectAll } = adapter.getSelectors();
