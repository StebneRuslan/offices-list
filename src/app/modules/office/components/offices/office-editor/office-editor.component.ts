import { Component, OnInit, Input } from '@angular/core';
import { OfficeModel } from '../../../../../shared/models/office.model';
import { AnimationsColorModel } from '../../../../../shared/models/animations-color.model';
import OfficeForm from './office.form';

@Component({
  selector: 'app-office-editor',
  templateUrl: './office-editor.component.html',
  styleUrls: ['./office-editor.component.scss']
})
export class OfficeEditorComponent implements OnInit {
  @Input() office: OfficeModel;
  public form: OfficeForm;
  public model: OfficeModel;
  public animationColorModel = new AnimationsColorModel('rgb(23, 87, 134)', 'rgb(255, 255, 255)');
  constructor() {
    this.model = new OfficeModel();
    this.form = new OfficeForm(this.office || this.model);
  }

  public ngOnInit(): void {}

  public saveOffice(): void {
    console.log(this.form.officeFormGroup.value);
  }

  public closeOfficeEditor(): void {
    console.log(close);
  }
}
