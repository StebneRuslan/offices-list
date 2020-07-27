import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as officesActions from '../actions/office.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OfficeService } from '../../../core/services/office/office.service';
import { of } from 'rxjs';

@Injectable()
export class OfficeEffects {
  loadOffices$ = createEffect(() => this.actions$
    .pipe(
      ofType(officesActions.loadOffices),
      mergeMap(() => this.officeService.getOffices()
        .pipe(
          map(offices => officesActions.officesLoadSuccess({ data: this.officeService.handleOfficeNames(offices)})),
          catchError(error => of(officesActions.officesLoadError({ error })))
        ))
    )
  );

  addOffice$ = createEffect(() => this.actions$
    .pipe(
      ofType(officesActions.addOffice),
      mergeMap(action => this.officeService.addOffice(action.data)
        .pipe(
          map(result => officesActions.addOfficeSuccess({data: this.officeService.handleSingleOfficeNames(action.data, result)})),
          catchError(error => of(officesActions.addOfficeError({ error })))
        ))
    )
  );

  removeOffice$ = createEffect(() => this.actions$
    .pipe(
      ofType(officesActions.removeOffice),
      mergeMap(action => this.officeService.deleteOffices(action.name)
        .pipe(
          map(result => officesActions.removeOfficeSuccess({name: action.name})),
          catchError(error => of(officesActions.removeOfficeError({ error })))
        ))
    )
  );

  updateOffice$ = createEffect(() => this.actions$
    .pipe(
      ofType(officesActions.updateOffice),
      mergeMap(action => this.officeService.updateOffice(action.data)
        .pipe(
          map(data => officesActions.updateOfficeSuccess({ data })),
          catchError(error => of(officesActions.updateOfficeError({ error })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private officeService: OfficeService
  ) {
  }
}
