import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Profit } from '../profit.model';
import { NgForm } from '@angular/forms';
import { ProfitService } from '../profit.service';

@Component({
  selector: 'app-profit-edit',
  templateUrl: './profit-edit.component.html',
  styleUrl: './profit-edit.component.css'
})
export class ProfitEditComponent {

  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Profit;

  constructor(private profitService: ProfitService) { }

  ngOnInit() {
    this.subscription = this.profitService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.profitService.getRecord(index);
          this.slForm.setValue({
            code: this.editedItem.code,
            description: this.editedItem.description
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRecord = new Profit(value.code, value.description);
    if (this.editMode) {
      this.profitService.updateRecord(this.editedItemIndex, newRecord);
    } else {
      this.profitService.addRecord(newRecord);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.profitService.deleteRecord(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
