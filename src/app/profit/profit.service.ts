// import { Injectable } from '@angular/core';

// import { Subject } from 'rxjs';
// import { Profit } from './profit.model';

// @Injectable()
// export class ProfitService {
//   recordsChanged = new Subject<Profit[]>();
//   startedEditing = new Subject<number>();

//   private records: Profit[] = [
//     new Profit(
//       'Profit 1',
//       'Profit 1 Desc'),
//       new Profit(
//         'Profit 2',
//         'Profit 2 Desc'),
//         new Profit(
//             'Profit 3',
//             'Profit 3 Desc'),
//   ];


//   getRecords() {
//     return this.records.slice();
//   }

//   getRecord(index: number) {
//     return this.records[index];
//   }
 

//   addRecord(Profit: Profit) {
//     this.records.push(Profit);
//     this.recordsChanged.next(this.records.slice());
//   }

//   addrecords(records: Profit[]) {
//     this.records.push(...records);
//     this.recordsChanged.next(this.records.slice());
//   }
//   updateRecord(index: number, newProfit: Profit) {
//     this.records[index] = newProfit;
//     this.recordsChanged.next(this.records.slice());
//   }

//   deleteRecord(index: number) {
//     this.records.splice(index, 1);
//     this.recordsChanged.next(this.records.slice());
//   }

// }

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profit } from './profit.model';
import { ApiService } from '../ApiService.service';

@Injectable()
export class ProfitService {
  recordsChanged = new Subject<Profit[]>();
  startedEditing = new Subject<number>();

  private records: Profit[] = [];

  constructor(private apiService: ApiService) { }

  fetchRecordsFromBackend() {
    const url = 'backend-endpoint';
    this.apiService.get<Profit[]>(url)
      .subscribe((records: Profit[]) => {
        this.records = records;
        this.recordsChanged.next(this.records.slice());
      });
  }

  getRecords() {
    return this.records.slice();
  }

  getRecord(index: number) {
    return this.records[index];
  }

  addRecord(newRecord: Profit) {
    const url = 'backend-endpoint'; 
    this.apiService.post<Profit>(url, newRecord)
      .subscribe((record: Profit) => {
        this.records.push(record);
        this.recordsChanged.next(this.records.slice());
      });
  }

  updateRecord(index: number, updatedRecord: Profit) {
    const url = 'backend-endpoint'; 
    this.apiService.put<Profit>(url, updatedRecord)
      .subscribe((record: Profit) => {
        this.records[index] = record;
        this.recordsChanged.next(this.records.slice());
      });
  }

  deleteRecord(index: number) {
    const url = 'backend-endpoint'; 
    this.apiService.delete<Profit>(url)
      .subscribe(() => {
        this.records.splice(index, 1);
        this.recordsChanged.next(this.records.slice());
      });
  }
}
