import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { City } from '../city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrl: './city-edit.component.css'
})
export class CityEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: City;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.subscription = this.cityService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.cityService.getCity(index);
          this.slForm.setValue({
            code: this.editedItem.code,
            description: this.editedItem.description
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newCity = new City(value.code, value.description);
    if (this.editMode) {
      this.cityService.updateCity(this.editedItemIndex, newCity);
    } else {
      this.cityService.addCity(newCity);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.cityService.deleteCity(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
