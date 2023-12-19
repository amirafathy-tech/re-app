import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { UnitFixture } from '../unit-fixture.model';
import { UnitFixtureService } from '../unit-fixture.service';

@Component({
  selector: 'app-unit-fixture-edit',
  templateUrl: './unit-fixture-edit.component.html',
  styleUrl: './unit-fixture-edit.component.css'
})
export class UnitFixtureEditComponent {

  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: UnitFixture;

  constructor(private unitFixtureService: UnitFixtureService) { }

  ngOnInit() {
    this.subscription = this.unitFixtureService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.unitFixtureService.getRecord(index);
          this.slForm.setValue({
            code: this.editedItem.code,
            description: this.editedItem.description
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRecord = new UnitFixture(value.code, value.description);
    if (this.editMode) {
      this.unitFixtureService.updateRecord(this.editedItemIndex, newRecord);
    } else {
      this.unitFixtureService.addRecord(newRecord);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.unitFixtureService.deleteRecord(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
