import { Component } from '@angular/core';
import { BuildingType } from './building-type.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { BuildingTypeService } from './building-type.service';

@Component({
  selector: 'app-building-type',
  templateUrl: './building-type.component.html',
  styleUrl: './building-type.component.css',
  providers: [BuildingTypeService]
})
export class BuildingTypeComponent {
  
  records: BuildingType[];
  private subscription: Subscription;
  constructor(private buildingtypeService: BuildingTypeService) { }

  ngOnInit() {
    this.records = this.buildingtypeService.getRecords();
    this.subscription = this.buildingtypeService.recordsChanged
      .subscribe(
        (records: BuildingType[]) => {
          this.records = records;
        }
      );
  }
  onEditItem(index: number) {
    this.buildingtypeService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
