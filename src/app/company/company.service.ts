import { Injectable } from '@angular/core';

import { Company} from './company.model';

@Injectable()
export class CompanyService {

  private companies: Company[] = [
    new Company(
      'Company 1',
      'Company 1 Desc'),
      new Company(
        'Company 2',
        'Company 2 Desc'),
        new Company(
            'Company 3',
            'Company 3 Desc'),
  ];


  getCompanies() {
    return this.companies.slice();
  }

  getCompany(index: number) {
    return this.companies[index];
  }


}
