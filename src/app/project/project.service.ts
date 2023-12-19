import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { LocalDate } from 'js-joda';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  recordsChanged = new Subject<Project[]>();
  startedEditing = new Subject<number>();

  private records: Project[] = [
    new Project(
        1,
        'Project 1',
        'Project 1 Desc',
        LocalDate.of(2022, 11, 20), 
        'profit',
      
      
      ),
      new Project(
        2,
        'Project 2',
        'Project 2 Desc',
        LocalDate.of(2022, 11, 20), 
        'profit',
        )];


  getRecords() {
   // console.log(this.records.slice());
    return this.records.slice();
  }

  getRecord(index: number) {
    return this.records[index];
  }
 

  addRecord(Project: Project) {
    this.records.push(Project);
    //console.log(this.records);
    this.recordsChanged.next(this.records.slice());
  }

  addrecords(records: Project[]) {
    this.records.push(...records);
    this.recordsChanged.next(this.records.slice());
  }
  updateRecord(index: number, newProject: Project) {
    this.records[index] = newProject;
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
