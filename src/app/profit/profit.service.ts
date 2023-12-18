import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Profit } from './profit.model';

@Injectable()
export class ProfitService {
  recordsChanged = new Subject<Profit[]>();
  startedEditing = new Subject<number>();

  private records: Profit[] = [
    new Profit(
      'Profit 1',
      'Profit 1 Desc'),
      new Profit(
        'Profit 2',
        'Profit 2 Desc'),
        new Profit(
            'Profit 3',
            'Profit 3 Desc'),
  ];


  getRecords() {
    return this.records.slice();
  }

  getRecord(index: number) {
    return this.records[index];
  }
 

  addRecord(Profit: Profit) {
    this.records.push(Profit);
    this.recordsChanged.next(this.records.slice());
  }

  addrecords(records: Profit[]) {
    this.records.push(...records);
    this.recordsChanged.next(this.records.slice());
  }
  updateRecord(index: number, newProfit: Profit) {
    this.records[index] = newProfit;
    this.recordsChanged.next(this.records.slice());
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
    this.recordsChanged.next(this.records.slice());
  }

}
