import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OfficesState, officesStateFeatureKey } from '../reducers';
import { selectAll } from '../reducers';

export const selectOfficesState = createFeatureSelector<OfficesState>(officesStateFeatureKey);

export const selectAllOffices = createSelector(
  selectOfficesState,
  selectAll
);

export const selectOfficesCount = createSelector(
  selectAllOffices,
  offices => offices.map(office => office).length
);

export const selectOfficesError = createSelector(
  createFeatureSelector<{ offices: OfficesState, error: string }>(officesStateFeatureKey),
  state => state.error
);
