import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { OfficeModel } from '../../../shared/models/office.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import { addOffice, removeOffice, updateOffice } from '../actions/office.actions';

export const officesStateFeatureKey = 'officesState';

export interface OfficesState extends EntityState<OfficeModel> {

}

export const adapter = createEntityAdapter<OfficeModel>();

export const initialOfficesState = adapter.getInitialState();

export const officesReducers = createReducer(
  initialOfficesState,
  on(addOffice, (state, action) => adapter.addOne(action.data, state)),
  on(removeOffice, (state, action) => adapter.removeOne(action.key, state)),
  on(updateOffice, (state, action) => adapter.updateOne({
    id: action.data.id,
    changes: action.data
  }, state))
);


export const metaReducers: MetaReducer<OfficesState>[] = !environment.production ? [] : [];

export const { selectAll } = adapter.getSelectors();
