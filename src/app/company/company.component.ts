import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
  providers: [CompanyService]
})
export class CompanyComponent {

  records: Company[];
  private subscription: Subscription;
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.records = this.companyService.getRecords();
    this.subscription = this.companyService.recordsChanged
      .subscribe(
        (records: Company[]) => {
          this.records = records;
        }
      );
  }
  onEditItem(index: number) {
    this.companyService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

 