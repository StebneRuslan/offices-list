import { OfficeModel } from './office.model';
import * as pick from 'lodash.pick';

interface DetailsOfficeModel {
  title: string;
  value: string;
}

const addressFields = ['country', 'state', 'streetAddress', 'secondAddress'];

export class OfficeRenderModel {
  address = [];
  details: DetailsOfficeModel[] = [];

  constructor(office?: OfficeModel) {
    if (office) {
      this.address = [
        ...Object.values(pick(office, addressFields.slice(0, 1))),
        `${office.city}, ${office.postalCode}`,
        ...Object.values(pick(office, addressFields.slice(2, addressFields.length)))
      ];
      this.details = [{
        title: 'Phone',
        value: office.phone
      }, {
        title: 'Fax',
        value: office.fax
      }, {
        title: 'Email',
        value: office.email
      }];
    }
  }
}
