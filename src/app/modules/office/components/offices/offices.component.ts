import { Component, OnInit } from '@angular/core';
import { OfficeModel } from '../../../../shared/models/office.model';
import { OfficesState } from '../../reducers';
import { addOffice, removeOffice, updateOffice } from '../../actions/office.actions';
import { select, Store } from '@ngrx/store';
import { selectAllOffices, selectOfficesCount } from '../../selectors/offices.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
  public isOpen = false;
  public activeEditId = '';
  public offices = [];
  public offices$: Observable<OfficeModel[]>;
  public officesCount$: Observable<number>;
  constructor(private store: Store<OfficesState[]>) { }
  public ngOnInit(): void {
    this.offices$ = this.store.pipe(select(selectAllOffices));
    this.officesCount$ = this.store.pipe(select(selectOfficesCount));
  }

  public handleForm(state: boolean = false): void {
    this.isOpen = state;
    this.activeEditId = '';
  }

  public createOffice(office: OfficeModel): void {
    this.handleForm(false);
    this.store.dispatch(addOffice({ data: office }));
  }

  public updateOffice(activeOffice: OfficeModel): void {
    this.store.dispatch(updateOffice({ data: activeOffice }));
    this.handleForm(false);
  }

  public removeOffice(id: string): void {
    this.handleForm(false);
    this.store.dispatch(removeOffice({ key: id }));
  }

  public showEditForm(id: string): void {
    this.activeEditId = id;
  }

}
