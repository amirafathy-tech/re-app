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
 
  //  ngOnInit(): void {
  //   this.getFriends();
  //   this.getFriends();
  //   this.editForm = this.fb.group({
  //     id: [''],
  //     firstname: [''],
  //     lastname: [''],
  //     department: [''],
  //     email: [''],
  //     country: ['']
  //   } );
  // }
  // getCompanies() {
  //   // this.httpClient.get<any>('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information').subscribe(
  //   //   response => {
  //   //     console.log(response);
  //   //     this.friends = response;
  //   //   }
  //   // );
  // }
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

  // openDetails(targetModal, friend: Friend) {
  //   this.modalService.open(targetModal, {
  //    centered: true,
  //    backdrop: 'static',
  //    size: 'lg'
  //  });
  //   document.getElementById('fname').setAttribute('value', friend.firstname);
  //   document.getElementById('lname').setAttribute('value', friend.lastname);
  //   document.getElementById('dept').setAttribute('value', friend.department);
  //   document.getElementById('email2').setAttribute('value', friend.email);
  //   document.getElementById('cntry').setAttribute('value', friend.country);
  // }

  // openEdit(targetModal, friend: Friend) {
  //   this.modalService.open(targetModal, {
  //    centered: true,
  //    backdrop: 'static',
  //    size: 'lg'
  //  });
  // //   document.getElementById('fname').setAttribute('value', friend.firstname);
  // //   document.getElementById('lname').setAttribute('value', friend.lastname);
  // //   document.getElementById('dept').setAttribute('value', friend.department);
  // //   document.getElementById('email2').setAttribute('value', friend.email);
  // //   document.getElementById('cntry').setAttribute('value', friend.country);
  // }

  // openEdit(targetModal, friend: Friend) {
  //   this.modalService.open(targetModal, {
  //     backdrop: 'static',
  //     size: 'lg'
  //   });
  //   this.editForm.patchValue( {
  //     id: friend.id, 
  //     firstname: friend.firstname,
  //     lastname: friend.lastname,
  //     department: friend.department,
  //     email: friend.email,
  //     country: friend.country
  //   });
  // }

  // onSave() {
  //   const editURL = 'http://localhost:8888/friends/' + this.editForm.value.id + '/edit';
  //   console.log(this.editForm.value);
  //   this.httpClient.put(editURL, this.editForm.value)
  //     .subscribe((results) => {
  //       this.ngOnInit();
  //       this.modalService.dismissAll();
  //     });
  // }

  // openDelete(targetModal, friend: Friend) {
  //   this.deleteId = friend.id;
  //   this.modalService.open(targetModal, {
  //     backdrop: 'static',
  //     size: 'lg'
  //   });
  // }

  // onDelete() {
  //   const deleteURL = 'http://localhost:8888/friends/' + this.deleteId + '/delete';
  //   this.httpClient.delete(deleteURL)
  //     .subscribe((results) => {
  //       this.ngOnInit();
  //       this.modalService.dismissAll();
  //     });
  // }

}


