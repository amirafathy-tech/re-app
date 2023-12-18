import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { BuildingType } from '../building-type.model';
import { BuildingTypeService } from '../building-type.service';

@Component({
  selector: 'app-building-type-edit',
  templateUrl: './building-type-edit.component.html',
  styleUrl: './building-type-edit.component.css'
})
export class BuildingTypeEditComponent {


  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: BuildingType;

  constructor(private buildingtypeService: BuildingTypeService) { }

  ngOnInit() {
    this.subscription = this.buildingtypeService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.buildingtypeService.getRecord(index);
          this.slForm.setValue({
            code: this.editedItem.code,
            description: this.editedItem.description
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRecord = new BuildingType(value.code, value.description);
    if (this.editMode) {
      this.buildingtypeService.updateRecord(this.editedItemIndex, newRecord);
    } else {
      this.buildingtypeService.addRecord(newRecord);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.buildingtypeService.deleteRecord(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
