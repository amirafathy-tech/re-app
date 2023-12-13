import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CompanyService } from './company.service';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }

  @ViewChild('confirmationModal') private modalComponent!: ModalComponent;

  async openModal() {
    await this.modalComponent.open();
  }
  open() {
    this.openModal();
  }

  getConfirmationValue(value: any) {
    if (value === 'Save click') {
      console.log(value)
    }
  }


}