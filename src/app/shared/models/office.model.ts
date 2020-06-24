export class OfficeModel {
  country = '';
  state = '';
  postalCode = '';
  city = '';
  streetAddress = '';
  secondAddress = '';
  phone = '';
  fax = '';
  email = '';
  officeType = '';

  constructor(office?) {
    for (const key in office) {
      if (this.hasOwnProperty(key)) {
        this[key] = office[key] || '';
      }
    }
  }
}
