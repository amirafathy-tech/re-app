import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { UnitFloor } from './unit-floor.model';

@Injectable()
export class UnitFloorService {
  recordsChanged = new Subject<UnitFloor[]>();
  startedEditing = new Subject<number>();

  private records: UnitFloor[] = [
    new UnitFloor(
      'UnitFloor 1',
      'UnitFloor 1 Desc'),
      new UnitFloor(
        'UnitFloor 2',
        'UnitFloor 2 Desc'),
        new UnitFloor(
            'UnitFloor 3',
            'UnitFloor 3 Desc'),
  ];


  getRecords() {
    return this.records.slice();
  }

  getRecord(index: number) {
    return this.records[index];
  }
 

  addRecord(UnitFloor: UnitFloor) {
    this.records.push(UnitFloor);
    this.recordsChanged.next(this.records.slice());
  }

  addrecords(records: UnitFloor[]) {
    this.records.push(...records);
    this.recordsChanged.next(this.records.slice());
  }
  updateRecord(index: number, newUnitFloor: UnitFloor) {
    this.records[index] = newUnitFloor;
    this.recordsChanged.next(this.records.slice());
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
    this.recordsChanged.next(this.records.slice());
  }

}
