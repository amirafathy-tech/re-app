import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';
import { ModalComponent } from '../../shared/modal/modal.component';


// export class CompanyListComponent implements OnInit {
//   // companies: Company[];

//   // constructor(private companyService: CompanyService,
//   //             private router: Router,
//   //             private route: ActivatedRoute) {
//   // }

//   // ngOnInit() {
//   //   this.companies = this.companyService.getCompanies();
//   // }

//   // onNewCompany() {
//   //   this.router.navigate(['new'], {relativeTo: this.route});
//   // }
//   //closeResult: string;
//   //@ViewChild('content') modalContent: any;

//   // constructor(private httpClient: HttpClient, private modalService: NgbModal, private fb: FormBuilder

//   // ) {
//   // }

//   ngOnInit(): void {
//   }
//   @ViewChild('confirmationModal') private modalComponent!: ModalComponent;
//   async openModal() {
//     await this.modalComponent.open();
//   }
//   open() {
//     this.openModal();
//   }
//   getConfirmationValue(value: any) {
//     if (value === 'Save click') {
//       console.log(value);

//     }
//   }


// }

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  closeResult: string;

  constructor(private httpClient: HttpClient, private modalService: NgbModal, private fb: FormBuilder) {
  }
  ngOnInit(): void {

  }
 
  onSubmit(f: NgForm) {
    const url = 'http://localhost:8888/friends/addnew';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }
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

  //getCompanies()


}


