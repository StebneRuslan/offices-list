import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OfficeModel } from '../../../../../shared/models/office.model';

export default class OfficeForm {
  private formBuilder: FormBuilder;
  public officeFormGroup: FormGroup;
  public model: OfficeModel;
  private defaultOfficeValidators = [Validators.required, Validators.min(3)];

  constructor(model: OfficeModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.officeFormGroup = this.formBuilder.group({
      country: new FormControl(this.model.country, {validators: this.defaultOfficeValidators}),
      state: new FormControl(this.model.state, {validators: this.defaultOfficeValidators}),
      postalCode: new FormControl(this.model.postalCode, {validators: this.defaultOfficeValidators}),
      city: new FormControl(this.model.city, {validators: this.defaultOfficeValidators}),
      streetAddress: new FormControl(this.model.streetAddress, {validators: this.defaultOfficeValidators}),
      secondAddress: new FormControl(this.model.secondAddress, {validators: this.defaultOfficeValidators}),
      phone: new FormControl(this.model.phone, {validators: [Validators.required, Validators.min(10)]}),
      fax: new FormControl(this.model.fax, {validators: this.defaultOfficeValidators}),
      email: new FormControl(this.model.email, {validators: [Validators.required, Validators.email]}),
      officeType: new FormControl(this.model.officeType, {validators: this.defaultOfficeValidators}),
    });

    this.officeFormGroup.valueChanges.subscribe((office: OfficeModel) => {
      for (const key in office) {
        if (this.model.hasOwnProperty(key)) {
          this.model[key] = office[key];
        }
      }
    });
  }
}
