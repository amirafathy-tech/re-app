import { Component,OnInit, Input  } from '@angular/core';
import { Company } from '../../company.model';
import { CompanyService } from '../../company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrl: './company-item.component.css'
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company;
  @Input() index: number;

 
   companies: Company[];

  constructor(private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.companies = this.companyService.getCompanies();
  }

}




