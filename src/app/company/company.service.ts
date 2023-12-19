import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Company } from './company.model';

@Injectable()
export class CompanyService {
  recordsChanged = new Subject<Company[]>();
  startedEditing = new Subject<number>();

  private records: Company[] = [
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


  getRecords() {
    return this.records.slice();
  }

  getRecord(index: number) {
    return this.records[index];
  }
 

  addRecord(Company: Company) {
    this.records.push(Company);
    this.recordsChanged.next(this.records.slice());
  }

  addrecords(records: Company[]) {
    this.records.push(...records);
    this.recordsChanged.next(this.records.slice());
  }
  updateRecord(index: number, newCompany: Company) {
    this.records[index] = newCompany;
    this.recordsChanged.next(this.records.slice());
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
    this.recordsChanged.next(this.records.slice());
  }

}
