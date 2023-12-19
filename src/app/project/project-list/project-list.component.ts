import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  closeResult: string;

  @ViewChild('f', { static: false }) slForm: NgForm;
  @Input() project: Project;
  @Input() index: number;
  editedItemIndex: number;

  projects: Project[];
  editForm: FormGroup;
  deleteId: number;

  constructor(private projectService: ProjectService, private modalService: NgbModal, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.projects = this.projectService.getRecords();
    this.editForm = this.fb.group({
      projectCode: [''],
      projectId: [''],
      projectDescription: [''],
      validFrom: [''],
      profit: [''],
    })
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newRecord = new Project(value.projectCode, value.projectId, value.projectDescription, value.validFrom, value.profit);
  
    this.projectService.addRecord(newRecord);
    this.ngOnInit(); //reload the table
  }


  openDetails(targetModal, project: Project) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('projectCode').setAttribute('value', String(project.projectCode));
    document.getElementById('projectId').setAttribute('value', project.projectId);
    document.getElementById('projectDescription').setAttribute('value', project.projectDescription);
    document.getElementById('validFrom').setAttribute('value', String(project.validFrom));
    document.getElementById('profit').setAttribute('value', String(project.profit));
  }

  openEdit(targetModal, project: Project) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      projectCode: project.projectCode,
      projectId: project.projectId,
      projectDescription: project.projectDescription,
      validFrom: project.validFrom,
      profit: project.profit
    });
  }
  onSave() {// for edit

    this.projectService.updateRecord(this.editForm.value.projectCode, this.editForm.value);
    this.ngOnInit();
    this.modalService.dismissAll();

  }

  openDelete(targetModal, project: Project) {
    this.deleteId = project.projectCode;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  onDelete() {
    console.log(this.deleteId);
    this.projectService.deleteRecord(this.deleteId);
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



