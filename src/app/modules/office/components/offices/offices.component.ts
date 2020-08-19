import { Component, OnInit } from '@angular/core';
import { OfficeModel } from '../../../../shared/models/office.model';
import { OfficesState } from '../../reducers';
import { addOffice, loadOffices, removeOffice, updateOffice } from '../../actions/office.actions';
import { select, Store } from '@ngrx/store';
import { selectAllOffices, selectOfficesCount, selectOfficesError } from '../../selectors/offices.selectors';
import { Observable } from 'rxjs';
import { OfficeService } from '../../../../core/services/office/office.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
  public officeError$: Observable<string> = this.store.select(selectOfficesError);
  public isOpen = false;
  public activeEditId = '';
  public offices$: Observable<OfficeModel[]>;
  public officesCount$: Observable<number>;
  constructor(
    private store: Store<OfficesState[]>
  ) { }

  public ngOnInit(): void {
    this.offices$ = this.store.select(selectAllOffices);
    this.officesCount$ = this.store.select(selectOfficesCount);
    this.store.dispatch(loadOffices());
    this.offices$.subscribe(() => {
      this.handleForm(false);
    });
  }

  public handleForm(state: boolean = false): void {
    this.isOpen = state;
    this.activeEditId = '';
  }

  public createOffice(office: OfficeModel): void {
    this.store.dispatch(addOffice({ data: office }));
  }

  public updateOffice(activeOffice: OfficeModel): void {
    this.store.dispatch(updateOffice({ data: activeOffice }));
  }

  public removeOffice(name: string): void {
    this.store.dispatch(removeOffice({ name }));
  }

  public showEditForm(id: string): void {
    this.activeEditId = id;
  }

}
