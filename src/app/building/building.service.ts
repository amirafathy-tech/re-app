import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { LocalDate } from 'js-joda';
import { Building } from './building.model';

@Injectable()
export class BuildingService {
  recordsChanged = new Subject<Building[]>();
  startedEditing = new Subject<number>();

  private records: Building[] = [
    new Building(
        1,
        'Building 1',
        'Building 1 Desc',
        1,
        LocalDate.of(2022, 11, 20), 
        1,
        'profit'
     
      
      ),
      new Building(
        2,
        'Building 2',
        'Building 2 Desc',
        1,
        LocalDate.of(2022, 11, 20), 
        2,
        'profit 2'
        )];


  getRecords() {
   // console.log(this.records.slice());
    return this.records.slice();
  }

  getRecord(index: number) {
    return this.records[index];
  }
 

  addRecord(Building: Building) {
    this.records.push(Building);
    //console.log(this.records);
    this.recordsChanged.next(this.records.slice());
  }

  addrecords(records: Building[]) {
    this.records.push(...records);
    this.recordsChanged.next(this.records.slice());
  }
  updateRecord(index: number, newBuilding: Building) {
    this.records[index] = newBuilding;
    console.log(this.records)
    this.recordsChanged.next(this.records.slice());
  }

  deleteRecord(index: number) {
    this.records.splice(index, 1);
    console.log(this.records);
    this.recordsChanged.next(this.records.slice());
    console.log(this.recordsChanged);
  }

}
