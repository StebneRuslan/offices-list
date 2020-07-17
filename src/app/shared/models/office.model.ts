import { UUID } from 'angular2-uuid';

export class OfficeModel {
  id = UUID.UUID();
  name = '';
  country = 'Country';
  state = 'State';
  postalCode = 'Code';
  city = 'City';
  streetAddress = 'First Address';
  secondAddress = 'Second Address';
  phone = 'Phone';
  fax = 'Fax';
  email = 'Email';
  officeType = false;

  constructor(office?) {
    for (const key in office) {
      if (this.hasOwnProperty(key)) {
        this[key] = office[key] || '';
      }
    }
  }
}
