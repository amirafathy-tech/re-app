import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Building } from '../building.model';
import { BuildingService } from '../building.service';
@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent implements OnInit {
  closeResult: string;

  @ViewChild('f', { static: false }) slForm: NgForm;
  @Input() building: Building;
  @Input() index: number;
  editedItemIndex: number;

  buildings: Building[];
  editForm: FormGroup;
  deleteId: number;

  constructor(private buildingService: BuildingService, private modalService: NgbModal, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildings = this.buildingService.getRecords();
    this.editForm = this.fb.group({
      buildingCode: [''],
      buildingId: [''],
      buildingDescription: [''],
      oldNumber: [''],
      validFrom: [''],
      numberOfFloors: [''],
      profit: [''],
    })
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newRecord = new Building(value.buildingCode, value.buildingId, value.buildingDescription, value.oldNumber, value.validFrom,
      value.numberOfFloors, value.profit);
  
    this.buildingService.addRecord(newRecord);
    this.ngOnInit(); //reload the table
  }


  openDetails(targetModal, Building: Building) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('buildingCode').setAttribute('value', String(Building.buildingCode));
    document.getElementById('buildingId').setAttribute('value', Building.buildingId);
    document.getElementById('buildingDescription').setAttribute('value', Building.buildingDescription);
    document.getElementById('oldNumber').setAttribute('value', String(Building.oldNumber));
    document.getElementById('validFrom').setAttribute('value', String(Building.validFrom));
    document.getElementById('numberOfFloors').setAttribute('value', String(Building.numberOfFloors));
    document.getElementById('profit').setAttribute('value', Building.profit);
  }

  openEdit(targetModal, Building: Building) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      buildingCode: Building.buildingCode,
      buildingId: Building.buildingId,
      buildingDescription: Building.buildingDescription,
      oldNumber: Building.oldNumber,
      validFrom: Building.validFrom,
      numberOfFloors: Building.numberOfFloors,
      profit: Building.profit
    });
  }
  onSave() {// for edit

    this.buildingService.updateRecord(this.editForm.value.buildingCode, this.editForm.value);
    this.ngOnInit();
    this.modalService.dismissAll();

  }

  openDelete(targetModal, Building: Building) {
    this.deleteId = Building.buildingCode;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  onDelete() {
    console.log(this.deleteId);
    this.buildingService.deleteRecord(this.deleteId);
    this.ngOnInit();
    this.modalService.dismissAll();
    //this.onClear();
  }
  onClear() {
    this.slForm.reset();
    //this.editMode = false;
  }
  // for add modal
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}


