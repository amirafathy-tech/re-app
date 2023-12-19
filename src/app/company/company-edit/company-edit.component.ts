import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.css'
})
export class CompanyEditComponent {

  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.subscription = this.companyService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.companyService.getRecord(index);
          this.slForm.setValue({
            code: this.editedItem.code,
            description: this.editedItem.description
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newRecord = new Company(value.code, value.description);
    if (this.editMode) {
      this.companyService.updateRecord(this.editedItemIndex, newRecord);
    } else {
      this.companyService.addRecord(newRecord);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.companyService.deleteRecord(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}

