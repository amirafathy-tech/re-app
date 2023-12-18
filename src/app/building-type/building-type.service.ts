import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { BuildingType } from './building-type.model';

@Injectable()
export class BuildingTypeService {
  recordsChanged = new Subject<BuildingType[]>();
  startedEditing = new Subject<number>();

  private records: BuildingType[] = [
    new BuildingType(
      'BuildingType 1',
      'BuildingType 1 Desc'),
      new BuildingType(
        'BuildingType 2',
        'BuildingType 2 Desc'),
        new BuildingType(
            'BuildingType 3',
            'BuildingType 3 Desc'),
  ];


  getRecords() {
    return this.records.slice();
  }

  getRecord(index: number) {
    return this.records[index];
  }
 

  addRecord(BuildingType: BuildingType) {
    this.records.push(BuildingType);
    this.recordsChanged.next(this.records.slice());
  }

  addrecords(records: BuildingType[]) {
    this.records.push(...records);
    this.recordsChanged.next(this.records.slice());
  }
  updateRecord(index: number, newBuildingType: BuildingType) {
    this.records[index] = newBuildingType;
    this.recordsChanged.next(this.records.slice());
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
    this.recordsChanged.next(this.records.slice());
  }

}
