import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { UnitFloor } from '../unit-floor.model';
import { UnitFloorService } from '../unit-floor.service';

@Component({
  selector: 'app-unit-floor-edit',
  templateUrl: './unit-floor-edit.component.html',
  styleUrl: './unit-floor-edit.component.css'
})
export class UnitFloorEditComponent {

  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: UnitFloor;

  constructor(private unitFloorService: UnitFloorService) { }

  ngOnInit() {
    this.subscription = this.unitFloorService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.unitFloorService.getRecord(index);
          this.slForm.setValue({
            code: this.editedItem.code,
            description: this.editedItem.description
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRecord = new UnitFloor(value.code, value.description);
    if (this.editMode) {
      this.unitFloorService.updateRecord(this.editedItemIndex, newRecord);
    } else {
      this.unitFloorService.addRecord(newRecord);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.unitFloorService.deleteRecord(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
