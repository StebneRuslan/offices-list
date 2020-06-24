import { Component, OnInit } from '@angular/core';
import { OfficeModel } from '../../../../shared/models/office.model';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
  public newOffice = new OfficeModel();
  public offices = [1, 2, 3];
  constructor() { }
  ngOnInit() {
  }

}
