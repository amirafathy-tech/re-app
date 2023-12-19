import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { UnitFixture } from './unit-fixture.model';

@Injectable()
export class UnitFixtureService {
  recordsChanged = new Subject<UnitFixture[]>();
  startedEditing = new Subject<number>();

  private records: UnitFixture[] = [
    new UnitFixture(
      'UnitFixture 1',
      'UnitFixture 1 Desc'),
      new UnitFixture(
        'UnitFixture 2',
        'UnitFixture 2 Desc'),
        new UnitFixture(
            'UnitFixture 3',
            'UnitFixture 3 Desc'),
  ];


  getRecords() {
    return this.records.slice();
  }

  getRecord(index: number) {
    return this.records[index];
  }
 

  addRecord(UnitFixture: UnitFixture) {
    this.records.push(UnitFixture);
    this.recordsChanged.next(this.records.slice());
  }

  addrecords(records: UnitFixture[]) {
    this.records.push(...records);
    this.recordsChanged.next(this.records.slice());
  }
  updateRecord(index: number, newUnitFixture: UnitFixture) {
    this.records[index] = newUnitFixture;
    this.recordsChanged.next(this.records.slice());
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
    this.recordsChanged.next(this.records.slice());
  }

}
