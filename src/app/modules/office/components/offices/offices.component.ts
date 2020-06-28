import { Component, OnInit } from '@angular/core';
import { OfficeModel } from '../../../../shared/models/office.model';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
  public isOpen = false;
  public activeEditId = '';
  public offices = [];
  constructor() { }
  public ngOnInit(): void {}

  public handleForm(state?: boolean): void {
    this.isOpen = state || false;
    this.activeEditId = '';
  }

  public createOffice(office: OfficeModel): void {
    this.handleForm(false);
    this.offices.push(office);
  }

  public updateOffice(activeOffice: OfficeModel): void {
    this.offices.splice(this.offices.findIndex(office => office.id === activeOffice.id), 1, activeOffice);
    this.handleForm(false);
  }

  public removeOffice(id: string): void {
    this.handleForm(false);
    this.offices.splice(this.offices.findIndex(office => office.id = id), 1);
  }

  public showEditForm(id: string): void {
    this.activeEditId = id;
  }

}
