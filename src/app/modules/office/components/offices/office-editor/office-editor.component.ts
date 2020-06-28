import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  @Output() saveForm: EventEmitter<OfficeModel> = new EventEmitter<OfficeModel>();
  @Output() closeForm: EventEmitter<void> = new EventEmitter<void>();
  public form: OfficeForm;
  public model: OfficeModel;
  public animationColorModel = new AnimationsColorModel('rgb(23, 87, 134)', 'rgb(255, 255, 255)');
  constructor() {
    this.model = new OfficeModel();
    this.form = new OfficeForm(this.model);
  }

  public ngOnInit(): void {
    this.form.officeFormGroup.patchValue(this.office ? this.office : {});
  }

  public saveOffice(): void {
    this.saveForm.emit(this.form.officeFormGroup.value);
  }

  public closeOfficeEditor(): void {
    this.closeForm.emit();
  }
}
