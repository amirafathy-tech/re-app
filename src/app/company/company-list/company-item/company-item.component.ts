import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../company.model';
import { CompanyService } from '../../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company;
  @Input() index: number;

  companies: Company[];
  editForm: FormGroup;
  deleteId: number;

  constructor(private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute, private modalService: NgbModal,) {
  }

  ngOnInit() {
    this.companies = this.companyService.getCompanies();
  }

  openDetails(targetModal, company: Company) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('code').setAttribute('value', company.code);
    document.getElementById('description').setAttribute('value', company.description);
  }

  openEdit(targetModal, company: Company) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      code: company.code,
      description: company.description
    });
  }
  openDelete(targetModal, company: Company) {
    this.deleteId = company.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

}




